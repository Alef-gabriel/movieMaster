import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';

// PartialType allows all properties to be optional
export class UpdateUserDto extends PartialType(CreateUserDto) {}
