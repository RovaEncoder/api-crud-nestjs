import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { UpdateDto } from "./dto/update.dto";
export declare class AuthControleur {
    private authService;
    constructor(authService: AuthService);
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    update(email: string, dto: UpdateDto): Promise<string>;
}
