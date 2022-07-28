import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { NFTDto } from './dto';
import { NFTService } from './nfts.service';

@Controller('/nft')
export class NFTController {
  constructor(private userService: NFTService) {}

  @Post('/create')
  create(@Body() dto: NFTDto) {
    return this.userService.create(dto);
  }

  @Get('/ownedbyuser')
  ownedByUser(userId: string) {
    return this.userService.ownedByUser(userId);
  }

  @Get('/all')
  allNfts() {
    return this.userService.allNfts();
  }
}
