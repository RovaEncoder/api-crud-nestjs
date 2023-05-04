import { IsEmail, IsOptional } from "class-validator";

export class UpdateDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsEmail()
  @IsOptional()
  password: string;

  @IsEmail()
  @IsOptional()
  firstname: string;

  @IsEmail()
  @IsOptional()
  lastname: string;
}
