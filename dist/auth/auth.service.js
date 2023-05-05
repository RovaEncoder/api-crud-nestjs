"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signin(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException("No account associated with this email address");
        }
        const pwdStatus = await bcrypt.compare(dto.password, (await user).hashPassword);
        if (!pwdStatus) {
            throw new common_1.ForbiddenException("Password incorrect");
        }
        delete (await user).hashPassword;
        return this.signToken(user.id, user.email);
    }
    async signup(dto) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(dto.password, saltOrRounds);
        try {
            const user = this.prisma.user.create({
                data: {
                    email: dto.email,
                    hashPassword: hash,
                    firstName: dto.firstname,
                    lastName: dto.lastname,
                },
            });
            delete (await user).hashPassword;
            return user;
        }
        catch (error) {
            if (error.code === "P2002") {
                throw new common_1.ForbiddenException("this mail is already use");
            }
        }
    }
    async update(dto, email) {
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
        }
        catch (_a) {
            throw new common_1.ForbiddenException("Update failed");
        }
        return "Update success";
    }
    async signToken(userId, email) {
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map