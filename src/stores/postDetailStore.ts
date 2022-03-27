import { action, makeObservable, observable, runInAction } from "mobx";

import PostDetailRepository from "@/repositories/postDetailRepository";
import PostDetail from "@/models/PostDetail";

class PostDetailStore {
  postDetail: PostDetail | null = null;

  constructor() {
    makeObservable(this, {
      postDetail: observable,

      fetch: action.bound,
    });
  }

  async fetch(id: string): Promise<void> {
    this.postDetail = null;

    const post = await new PostDetailRepository().find(id);

    runInAction(() => {
      this.postDetail = PostDetail.makeInstance(post);
    });
  }
}

export default new PostDetailStore();
