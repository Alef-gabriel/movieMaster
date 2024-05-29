import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully fetched. return a token',
  })
  @ApiResponse({ status: 404, description: 'user not exist' })
  signIn(@Body() singInDto: CreateAuthDto) {
    return this.authService.signIn(singInDto.email, singInDto.password);
  }
}
