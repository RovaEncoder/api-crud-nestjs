import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;
}
