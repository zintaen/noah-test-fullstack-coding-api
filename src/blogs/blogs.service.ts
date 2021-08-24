import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';

import { BlogRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import IBlog from './interfaces/blog.interface';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogRepository)
    private readonly blogsRepository: BlogRepository,
  ) {}

  async getBlogs(): Promise<IBlog[]> {
    return this.blogsRepository.findBlogs();
  }

  async getBlogById(id: string): Promise<IBlog> {
    return this.blogsRepository.findBlogById(id);
  }

  async createBlog(createBlogDto: CreateBlogDto): Promise<IBlog> {
    return this.blogsRepository.createBlog(createBlogDto);
  }

  async updateBlog(updateBlogDto: UpdateBlogDto): Promise<UpdateResult> {
    return this.blogsRepository.updateBlog(updateBlogDto);
  }

  async deleteBlog(id: string): Promise<DeleteResult> {
    return this.blogsRepository.deleteBlog(id);
  }
}
