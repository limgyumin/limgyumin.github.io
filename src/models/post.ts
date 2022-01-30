export type PostInitializer = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

class Post {
  title: string;
  description: string;
  category: string;
  createdAt: string;

  constructor(post: PostInitializer) {
    this.title = post.title;
    this.description = post.description;
    this.category = post.category;
    this.createdAt = post.createdAt;
  }
}

export default Post;
