import postDetailLoader from "@/libs/Loader/PostDetailLoader";
import { PostDetailInitializer } from "@/models/PostDetail";

class PostDetailRepository {
  async find(id: string): Promise<PostDetailInitializer> {
    return postDetailLoader.load(id);
  }
}

export default PostDetailRepository;
