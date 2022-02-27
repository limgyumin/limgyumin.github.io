import { PostInitializer } from "@/models/Post";
import { PostDetailInitializer } from "@/models/PostDetail";

import List from "@/utils/list";
import postLoader from "@/libs/Loader/PostLoader";

type FetchPostsResponse = {
  posts: PostInitializer[];
  total: number;
};

type PaginationArgs = {
  offset: number;
  limit: number;
};

class PostRepository {
  async fetchPosts({
    offset,
    limit,
  }: PaginationArgs): Promise<FetchPostsResponse> {
    const posts = await postLoader.loadAll();

    const { list, total } = new List(posts)
      .orderBy("createdAt", "DESC")
      .paginate(offset, limit)
      .getMany();

    return { posts: list, total };
  }

  async fetchPostDetail(id: string): Promise<PostDetailInitializer> {
    const post = await postLoader.loadOne(id);

    return post;
  }
}

export default PostRepository;
