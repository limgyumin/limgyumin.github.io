import { makeObservable, observable, action, runInAction } from "mobx";

import Post from "@/models/Post";
import PostRepository from "@/repositories/postRepository";
import { POST_COUNT_PER_FETCH } from "@/constants/post";

class PostStore {
  posts: Post[] | null = null;
  page: number = 0;
  total: number | null = null;

  constructor(private readonly postRepository: PostRepository) {
    makeObservable(this, {
      posts: observable,
      page: observable,
      total: observable,

      setPage: action.bound,
      fetchPosts: action.bound,
    });
  }

  setPage(page: number): void {
    this.page = page;
  }

  async fetchPosts(): Promise<void> {
    const { posts, total } = await this.postRepository.fetchPosts({
      offset: this.page * POST_COUNT_PER_FETCH,
      limit: POST_COUNT_PER_FETCH,
    });

    runInAction(() => {
      this.posts = posts;
      this.total = total;
    });
  }
}

export default new PostStore(new PostRepository());
