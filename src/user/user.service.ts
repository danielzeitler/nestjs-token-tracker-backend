import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class UserService {
  constructor(
    private prismaService: PrismaService,
  ) {}

  async redeem() {
    return 'hello from redeem';
  }

  async create(dto) {
    const { email } = dto;
    return await this.prismaService.user.create({
      data: {
        email,
      },
    });
  }
}
