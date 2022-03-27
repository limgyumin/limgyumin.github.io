import { PostInitializer } from "@/models/Post";

import List from "@/utils/list";
import postLoader from "@/libs/Loader/PostLoader";

type FetchPostsResponse = {
  posts: PostInitializer[];
  total: number;
};

type FetchPostsArgs = {
  offset: number;
  limit: number;
  keyword: string;
};

class PostRepository {
  async find({
    offset,
    limit,
    keyword,
  }: FetchPostsArgs): Promise<FetchPostsResponse> {
    const posts = await postLoader.load();

    const { list, total } = new List(posts)
      .where("title", (v) => v.toLocaleLowerCase().includes(keyword))
      .orderBy("createdAt", "DESC")
      .paginate(offset, limit)
      .getMany();

    return { posts: list, total };
  }
}

export default PostRepository;
