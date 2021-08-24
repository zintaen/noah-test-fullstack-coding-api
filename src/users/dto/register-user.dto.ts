import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  readonly firebaseUid: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;
}
