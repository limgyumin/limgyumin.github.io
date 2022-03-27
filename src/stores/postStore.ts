import { makeObservable, observable, action, runInAction } from "mobx";

import Post from "@/models/Post";
import PostRepository from "@/repositories/postRepository";
import { POST_COUNT_PER_FETCH } from "@/constants/post";

class PostStore {
  posts: Post[] | null = null;
  total: number | null = null;

  page: number = 0;
  keyword: string = "";

  constructor() {
    makeObservable(this, {
      posts: observable,
      total: observable,
      page: observable,
      keyword: observable,

      setPage: action.bound,
      setKeyword: action.bound,
      fetch: action.bound,
    });
  }

  setPage(page: number): void {
    this.page = page;
  }

  setKeyword(keyword: string): void {
    this.keyword = keyword.toLocaleLowerCase();
  }

  async fetch(): Promise<void> {
    this.posts = null;
    this.total = null;

    const { posts, total } = await new PostRepository().find({
      offset: this.page * POST_COUNT_PER_FETCH,
      limit: POST_COUNT_PER_FETCH,
      keyword: this.keyword,
    });

    runInAction(() => {
      this.posts = posts.map(Post.makeInstance);
      this.total = total;
    });
  }
}

export default new PostStore();
