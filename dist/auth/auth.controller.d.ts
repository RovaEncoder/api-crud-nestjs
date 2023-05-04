import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UpdateDto } from "./dto/update.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    update(dto: UpdateDto, email: string): Promise<string>;
}
