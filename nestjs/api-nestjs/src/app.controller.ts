import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories(): string {
    return this.categoryService.findAll();
  }

  @Post()
  createCategory(): string {
    return this.categoryService.create();
  }
}
