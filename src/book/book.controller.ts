import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.model';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get()
    async getAllBook(): Promise<Book[]>{
        return this.bookService.getAllBook()
    }

    @Get(':id')
    async getBook(@Param() id: number): Promise<Book | null>{
        return this.bookService.getBook(id)
    }

    @Post()
    async createBook(@Body() request: Book): Promise<Book>{
        return this.bookService.createBook(request)
    }

    @Put(':id')
    async updateBook(@Param() id: number, @Body() request: Book): Promise<Book | null>{
        return this.bookService.updateBook(id, request)
    }

    @Delete(':id')
    async deleteBook(@Param() id: number): Promise<Book>{
        return this.bookService.deleteBook(id)
    }
}
