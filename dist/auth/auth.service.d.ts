import { AuthDto } from "./dto";
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UpdateDto } from "./dto/update.dto";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    update(dto: UpdateDto, email: string): Promise<string>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
