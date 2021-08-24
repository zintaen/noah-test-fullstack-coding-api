import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { BlogRepository } from './blog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BlogRepository]), HttpModule],
  providers: [BlogsService],
  exports: [BlogsService],
  controllers: [BlogsController],
})
export class BlogsModule {}
