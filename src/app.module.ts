import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule],
  providers: [PrismaService],
})
export class AppModule {}
