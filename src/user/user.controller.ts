import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @Get('/email')
  getUserByEmail(@Body() email: string) {
    return this.userService.getUserByEmail(email);
  }
}
