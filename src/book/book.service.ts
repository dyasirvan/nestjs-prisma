import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {

    constructor(private prismaService: PrismaService){}

    async getAllBook(): Promise<Book[]>{
        return this.prismaService.book.findMany()
    }

    async getBook(id: number): Promise<Book | null>{
        return this.prismaService.book.findUnique({where: {id:Number(id)}})
    }

    async createBook(data: Book): Promise<Book>{
        return this.prismaService.book.create({data})
    }

    async updateBook(id: number, data: Book): Promise<Book>{
        return this.prismaService.book.update({
            where: {id: Number(id)},
            data: {title: data.title, description: data.description}
        })
    }

    async deleteBook(id: number): Promise<Book>{
        return this.prismaService.book.delete({where: {id:Number(id)}})
    }

}
