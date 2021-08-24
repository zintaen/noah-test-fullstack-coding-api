import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBlogDto {
  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly thumbnail: string;
}
