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
    return await this.prismaService.iDs.findMany({
      where: {
        userId,
      },
    });
  }

  async allNfts() {
    return await this.prismaService.iDs.findMany();
  }
}
