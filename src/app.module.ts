import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env.development',
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
