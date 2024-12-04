import { Injectable } from '@nestjs/common';
import type { CreatePostInput } from './dto/create-post.input';
import type { UpdatePostInput } from './dto/update-post.input';
// biome-ignore lint/style/useImportType: <explanation>
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  findOne(id: number) {
    return this.prisma.post.findFirst({ where: { id: id } });
  }
  findAll() {
    return this.prisma.post.findMany({ orderBy: { id: 'desc' } });
  }

  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      data: updatePostInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    console.log(id);
    return this.prisma.post
      .delete({ where: { id: id } })
      .then(() => {
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
        // throw new Error('Could not delete post');
      });
  }
}
