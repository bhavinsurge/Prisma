import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from '../prisma.service'; // Import PrismaService

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService], // Add PrismaService here
})
export class UserModule {}
