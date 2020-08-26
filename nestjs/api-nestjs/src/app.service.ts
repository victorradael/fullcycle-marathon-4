import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  create(): string {
    return 'This action adds a new cat';
  }
  findAll(): string {
    return 'This action returns all cats';
  }
}
