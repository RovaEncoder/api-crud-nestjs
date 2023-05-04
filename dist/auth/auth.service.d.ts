import { AuthDto } from "./dto/auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UpdateDto } from "./dto/update.dto";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    singnup(dto: AuthDto): Promise<import(".prisma/client").User>;
    singnin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    update(dto: UpdateDto, email: string): Promise<string>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
