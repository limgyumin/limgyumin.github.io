import PostLoader from "@/libs/Loader/PostLoader";
import { PostInitializer } from "@/models/Post";

import List from "@/utils/list";

class SearchRepository {
  async find(keyword: string): Promise<PostInitializer[]> {
    const posts = await new PostLoader().load();

    const { list } = new List(posts)
      .where("title", (v) => v.toLocaleLowerCase().includes(keyword))
      .orderBy("createdAt", "DESC")
      .getMany();

    return list;
  }
}

export default SearchRepository;
