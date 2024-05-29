import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: 'The username of the user',
    example: 'john_doe',
  })
  readonly username?: string;

  @ApiPropertyOptional({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  readonly email?: string;

  @ApiPropertyOptional({
    description: 'The password of the user',
    example: 'password123',
  })
  readonly password?: string;
}
