import { Body, Controller, Post, HttpCode,HttpStatus, Put, UseGuards, Patch } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { GetCurrentUser } from "./decorator";
import { JwtGuard } from "./guard";
import { UpdateDto } from "./dto/update.dto";

@Controller('auth')
export class AuthControleur{
    constructor(private authService : AuthService, ){}

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }

    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }

    @UseGuards(JwtGuard)
    @HttpCode(HttpStatus.ACCEPTED)
    @Put('update')
    update(@GetCurrentUser('email') email:string, @Body() dto: UpdateDto ){
        return this.authService.update(dto, email)
    }

}

