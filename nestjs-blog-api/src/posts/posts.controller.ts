import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postService.create(post);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.postService.findById(id);
  }
}
