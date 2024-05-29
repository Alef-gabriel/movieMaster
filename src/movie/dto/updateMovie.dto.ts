import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './createMovie.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiPropertyOptional({
    description: 'The title of the movie',
    example: 'Inception',
  })
  readonly title?: string;

  @ApiPropertyOptional({
    description: 'A brief description of the movie',
    example: 'A mind-bending thriller about dream invasion',
  })
  readonly description?: string;

  @ApiPropertyOptional({
    description: 'The release year of the movie',
    example: 2010,
  })
  readonly year?: number;

  @ApiPropertyOptional({
    description: 'The director of the movie',
    example: 'Christopher Nolan',
  })
  readonly director?: string;

  @ApiPropertyOptional({
    description: 'The release date of the movie',
    example: '2010-07-16',
  })
  readonly releaseDate?: Date;

  @ApiPropertyOptional({
    description: 'The duration of the movie in minutes',
    example: 148,
  })
  readonly duration?: number;
}
