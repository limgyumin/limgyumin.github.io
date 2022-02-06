export type PostInitializer = {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

class Post {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;

  constructor(post: PostInitializer) {
    this.id = post.id;
    this.title = post.title;
    this.description = post.description;
    this.category = post.category;
    this.createdAt = post.createdAt;
  }
}

export default Post;
