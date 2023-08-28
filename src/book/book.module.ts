import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { PrismaService } from 'src/prisma.service';
import { BookService } from './book.service';

@Module({
    controllers: [BookController],
    providers: [BookService, PrismaService],
})
export class BookModule {}
