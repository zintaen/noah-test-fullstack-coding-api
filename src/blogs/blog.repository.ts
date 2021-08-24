import { ConflictException, Logger } from '@nestjs/common';
import {
  DeleteResult,
  EntityRepository,
  Repository,
  UpdateResult,
} from 'typeorm';

import { BlogEntity } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import IBlog from './interfaces/blog.interface';
import { MapData } from '../core/decorators/map-data.decorator';

@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity> {
  private logger = new Logger(BlogRepository.name);

  @MapData(IBlog)
  async findBlogs(): Promise<IBlog[]> {
    return this.find();
  }

  @MapData(IBlog)
  async findBlogById(id: string): Promise<IBlog> {
    return this.findOneOrFail(id);
  }

  @MapData(IBlog)
  async createBlog(createBlogDto: CreateBlogDto): Promise<IBlog> {
    const blogFound = await this.findOne({ title: createBlogDto.title });

    if (blogFound) {
      throw new ConflictException('Blog already existed');
    }

    return this.save(createBlogDto);
  }

  @MapData(IBlog)
  async updateBlog(updateBlogDto: UpdateBlogDto): Promise<UpdateResult> {
    const blogFound = await this.findOneOrFail(updateBlogDto.id);

    if (!blogFound.id) {
      throw new ConflictException('Blog does not exist');
    }

    return this.update(updateBlogDto.id, updateBlogDto);
  }

  async deleteBlog(id: string): Promise<DeleteResult> {
    return this.delete(id);
  }
}
