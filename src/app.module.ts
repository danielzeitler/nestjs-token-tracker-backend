import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NFTModule } from './nfts/nfts.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    NFTModule,
    PrismaModule,
  ],
})
export class AppModule {}
