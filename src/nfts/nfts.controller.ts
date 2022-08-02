import {
  Body,
  Controller,
  Get,
  NotFoundException,
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
  ownedByUser(@Body() userId: string) {
    return this.userService.ownedByUser(userId);
  }

  @Post('/redeemed')
  redeemToken(@Body() id: number) {
    try {
      return this.userService.redeemToken(id);
    } catch (e) {
      throw new NotFoundException('ID Not Found');
    }
  }

  @Get('/all')
  allNfts() {
    return this.userService.allNfts();
  }
}
