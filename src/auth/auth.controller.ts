import { Body, Controller, Post, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UpdateDto } from "./dto/update.dto";
import { stringify } from "querystring";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.singnup(dto);
  }

  @Post("signin")
  signin(@Body() dto: AuthDto) {
    return this.authService.singnin(dto);
  }

  @Put("update")
  update(@Body() dto: UpdateDto, email: string) {
    return this.authService.update(dto, email);
  }
}
