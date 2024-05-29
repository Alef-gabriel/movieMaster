import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString()
  readonly director?: string;

  @IsOptional()
  @IsDateString()
  readonly releaseDate?: Date;

  @IsOptional()
  @IsNumber()
  readonly duration?: number;
}
