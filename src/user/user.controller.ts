import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully fetched.',
  })
  @ApiResponse({ status: 401, description: 'user not loged' })
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully fetched.',
  })
  @ApiResponse({ status: 404, description: 'user not found.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'user not found.' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(+id, updateAuthDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'user not found.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
