import { Module } from '@nestjs/common';
import { NFTController } from './nfts.controller';
import { NFTService } from './nfts.service';

@Module({
  controllers: [NFTController],
  providers: [NFTService],
})
export class NFTModule {}
