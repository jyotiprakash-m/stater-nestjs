import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// biome-ignore lint/style/useImportType: <explanation>
import { PostService } from './post.service';
import type { CreatePostInput } from './dto/create-post.input';
import type { UpdatePostInput } from './dto/update-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query('posts')
  findAll() {
    return this.postService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postService.findOne(id);
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: number) {
    return this.postService.remove(id);
  }
}
