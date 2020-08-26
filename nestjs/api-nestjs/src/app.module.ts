import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CategoryService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CategoryService],
})
export class AppModule {}
