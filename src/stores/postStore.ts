import { makeObservable, observable, action, runInAction } from "mobx";

import Post from "@/models/post";
import PostRepository from "@/repositories/postRepository";

class PostStore {
  posts: Post[] | null = null;

  constructor(private readonly postRepository: PostRepository) {
    makeObservable(this, {
      posts: observable,
      fetchPosts: action.bound,
    });
  }

  async fetchPosts() {
    const posts = await this.postRepository.fetchPosts();

    runInAction(() => {
      this.posts = posts;
    });
  }
}

export default new PostStore(new PostRepository());
