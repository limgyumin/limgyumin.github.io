import { PostInitializer } from "@/models/Post";

import List from "@/utils/list";
import PostLoader from "@/libs/Loader/PostLoader";

type FetchPostsResponse = {
  posts: PostInitializer[];
  total: number;
};

type FetchPostsArgs = {
  offset: number;
  limit: number;
};

class PostRepository {
  async find({ offset, limit }: FetchPostsArgs): Promise<FetchPostsResponse> {
    const posts = await new PostLoader().load();

    const { list, total } = new List(posts)
      .orderBy("createdAt", "DESC")
      .paginate(offset, limit)
      .getMany();

    return { posts: list, total };
  }
}

export default PostRepository;
