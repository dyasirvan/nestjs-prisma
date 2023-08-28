import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { Book } from './book.model';
import { PrismaService } from 'src/prisma.service';

describe('BookService', () => {
  let service: BookService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: PrismaService,
          useValue: {
            book: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    prismaService = new PrismaService();
    service = new BookService(prismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllBook', () => {
    it('should return an array of books', async () => {
      const mockBooks: Book[] = [
        { id: 1, title: 'Book 1', description: 'Description 1' },
        { id: 2, title: 'Book 2', description: 'Description 2' },
      ];

      jest.spyOn(service, 'getAllBook').mockResolvedValue(mockBooks)

      const result = await service.getAllBook();

      expect(result).toEqual(mockBooks);
      expect(service.getAllBook).toHaveBeenCalledTimes(1);
      
    });
  });
});
