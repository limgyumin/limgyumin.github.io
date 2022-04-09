import PostDetailLoader from "@/libs/Loader/PostDetailLoader";
import { PostDetailInitializer } from "@/models/PostDetail";

class PostDetailRepository {
  async find(id: string): Promise<PostDetailInitializer> {
    return new PostDetailLoader().load(id);
  }
}

export default PostDetailRepository;
