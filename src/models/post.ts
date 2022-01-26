class Post {
  title: string;
  createdAt?: string;

  constructor(title: string, createdAt?: string) {
    this.title = title;
    this.createdAt = createdAt;
  }
}

export default Post;
