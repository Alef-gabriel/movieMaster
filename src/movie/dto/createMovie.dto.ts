import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'The title of the movie',
    example: 'Inception',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'A brief description of the movie',
    example: 'A mind-bending thriller about dream invasion',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({
    description: 'The release year of the movie',
    example: 2010,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @ApiProperty({
    description: 'The director of the movie',
    example: 'Christopher Nolan',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly director?: string;

  @ApiProperty({
    description: 'The release date of the movie',
    example: '2010-07-16',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  readonly releaseDate?: Date;

  @ApiProperty({
    description: 'The duration of the movie in minutes',
    example: 148,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  readonly duration?: number;
}
