import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FirebaseAuthGuard } from 'src/auth/guards/firebase-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesAllowed } from 'src/auth/decorators/roles.decorator';
import { Roles } from 'src/constants/Roles';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Blogs')
@Controller('/blogs')
@UseGuards(FirebaseAuthGuard, RolesGuard)
@RolesAllowed(Roles.USER)
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('/')
  @Public()
  getBlogs() {
    return this.blogsService.getBlogs();
  }

  @Get('/:id')
  @Public()
  getBlog(@Param('id') id) {
    return this.blogsService.getBlogById(id);
  }

  @Post('/create')
  @Public()
  createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.createBlog(createBlogDto);
  }

  @Put('/update')
  @Public()
  updateBlog(@Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.updateBlog(updateBlogDto);
  }

  @Delete('/:id')
  @Public()
  deleteBlog(@Param('id') id) {
    return this.blogsService.deleteBlog(id);
  }
}
