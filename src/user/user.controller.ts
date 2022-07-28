import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/redeem')
  redeem() {
    return this.userService.redeem();
  }

  @Post('/create')
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }
}
