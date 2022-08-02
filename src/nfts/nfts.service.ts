import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class NFTService {
  constructor(
    private prismaService: PrismaService,
  ) {}
  async create(dto) {
    const { nft, userId } = dto;

    return await this.prismaService.iDs.create({
      data: {
        userId,
        nft: parseInt(nft),
      },
    });
  }

  async ownedByUser(userId) {
    const { userId: id } = userId;
    return await this.prismaService.iDs.findMany({
      where: {
        userId: id,
      },
    });
  }

  async redeemToken(id) {
    const { tokenId } = id;

    return this.prismaService.iDs.findFirst({
      where: {
        nft: {
          equals: parseInt(tokenId),
        },
      },
    });
  }

  async allNfts() {
    return await this.prismaService.iDs.findMany();
  }
}
