import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create movie' })
  @ApiResponse({
    status: 201,
    description: 'The movie has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createAuthDto: CreateMovieDto) {
    return this.movieService.create(createAuthDto);
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('all')
  @CacheTTL(30)
  @Get()
  @ApiOperation({ summary: 'Get all movie' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully fetched.',
  })
  @ApiResponse({ status: 401, description: 'movie not loged' })
  findAll() {
    return this.movieService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get movie by ID' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully fetched.',
  })
  @ApiResponse({ status: 404, description: 'movie not found.' })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update movie by ID' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'movie not found.' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateAuthDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete movie by ID' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'movie not found.' })
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
