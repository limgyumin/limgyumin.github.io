import { action, makeObservable, observable, runInAction } from "mobx";

import Post from "@/models/Post";
import SearchRepository from "@/repositories/searchRepository";

class SearchStore {
  posts: Post[] | null = null;

  constructor() {
    makeObservable(this, {
      posts: observable,

      fetch: action.bound,
    });
  }

  async fetch(keyword: string): Promise<void> {
    this.posts = null;

    const posts = await new SearchRepository().find(keyword.toLowerCase());

    runInAction(() => {
      this.posts = posts.map(Post.makeInstance);
    });
  }
}

export default new SearchStore();
