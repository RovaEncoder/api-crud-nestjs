import { Module } from "@nestjs/common";
import { AuthControleur } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy";


@Module({
    imports: [PrismaModule, JwtModule.register({})],
    controllers: [AuthControleur],
    providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule{}