import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  year: number;

  @IsString()
  @IsNotEmpty()
  isbn: string;
}
