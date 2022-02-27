export type PostInitializer = {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

class Post {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly createdAt: string;

  constructor(post: PostInitializer) {
    this.id = post.id;
    this.title = post.title;
    this.description = post.description;
    this.category = post.category;
    this.createdAt = post.createdAt;
  }

  static makeInstance(post: PostInitializer): Post {
    return new Post(post);
  }
}

export default Post;
