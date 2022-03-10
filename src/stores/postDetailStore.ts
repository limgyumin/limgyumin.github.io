import { action, makeObservable, observable, runInAction } from "mobx";

import PostRepository from "@/repositories/postRepository";
import PostDetail from "@/models/PostDetail";

class PostDetailStore {
  postDetail: PostDetail | null = null;

  constructor() {
    makeObservable(this, {
      postDetail: observable,

      fetchPostDetail: action.bound,
    });
  }

  async fetchPostDetail(id: string): Promise<void> {
    this.postDetail = null;

    const post = await new PostRepository().fetchPostDetail(id);

    runInAction(() => {
      this.postDetail = PostDetail.makeInstance(post);
    });
  }
}

export default new PostDetailStore();
