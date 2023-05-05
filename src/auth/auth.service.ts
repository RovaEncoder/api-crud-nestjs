import { Injectable, ForbiddenException } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";
import { error } from "console";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UpdateDto } from "./dto/update.dto";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signin(dto: AuthDto) {
    //case: email verification
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //case: user doesn't exit
    if (!user) {
      throw new ForbiddenException(
        "No account associated with this email address"
      );
    }

    //case: verifacation of password

    const pwdStatus = await bcrypt.compare(
      dto.password,
      (
        await user
      ).hashPassword
    );

    //case: the password doesn't match
    if (!pwdStatus) {
      throw new ForbiddenException("Password incorrect");
    }
    //case: creditals (email and passwor) corect
    delete (await user).hashPassword;
    return this.signToken(user.id, user.email);
  }

  async signup(dto: AuthDto) {
    //hash the password
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(dto.password, saltOrRounds);
    //save the user by looking if exist
    try {
      const user = this.prisma.user.create({
        data: {
          email: dto.email,
          hashPassword: hash,
        },
      });
      delete (await user).hashPassword;
      return user;
    } catch (error) {
      if (error.code === "P2002") {
        throw new ForbiddenException("this mail is already use");
      }
    }
  }

  async update(dto: UpdateDto, email: string) {
    const password = await bcrypt.hash(dto.password, 10);

    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      await this.prisma.user.update({
        where: {
          email,
        },
        data: {
          email: dto.email || user.email,
          hashPassword: password || user.hashPassword,
          firstName: dto.firstname || user.firstName,
          lastName: dto.lastname || user.lastName,
        },
      });
    } catch (error) {
      throw new Error("Update failed");
    }

    return "Update success";
  }

  async signToken(
    userId: number,
    email: string
  ): Promise<{ access_token: string }> {
    const secret = this.config.get("JWT_SECRET");
    const payload = {
      sub: userId,
      email,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: "60m",
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
