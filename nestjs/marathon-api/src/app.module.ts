import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories/categories.controller';
import { CategoriesService } from './categories/categories/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
