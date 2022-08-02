import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class UserService {
  constructor(
    private prismaService: PrismaService,
  ) {}

  async create(dto) {
    const { email, gifts, nfts } = dto;

    return await this.prismaService.user.create({
      data: {
        email,
        NFTs: {
          createMany: {
            data: nfts,
          },
        },
        Gifts: {
          create: {
            itemType: gifts.itemType,
            size: gifts.size,
          },
        },
      },
      include: {
        NFTs: true,
        Gifts: true,
      },
    });
  }

  async getUserByEmail(email) {
    const { email: mail } = email;
    return await this.prismaService.user.findFirst(
      {
        where: {
          email: mail,
        },
        include: {
          Gifts: true,
          NFTs: true,
        },
      },
    );
  }
}
