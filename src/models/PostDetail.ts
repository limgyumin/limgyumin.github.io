import Post, { PostInitializer } from "./Post";

export type PostDetailInitializer = PostInitializer & {
  article: string;
};

class PostDetail extends Post {
  readonly article: string;

  constructor(postDetail: PostDetailInitializer) {
    super(postDetail);

    this.article = postDetail.article;
  }

  static makeInstance(postDetail: PostDetailInitializer): PostDetail {
    return new PostDetail(postDetail);
  }
}

export default PostDetail;
