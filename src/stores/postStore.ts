import { makeObservable, observable, action, runInAction } from "mobx";

import Post from "@/models/post";
import PostRepository from "@/repositories/postRepository";
import Page from "@/utils/page";

import { POST_COUNT_PER_FETCH } from "@/constants/post";

class PostStore {
  posts: Post[] | null = null;
  page: number = 0;
  totalCount: number | null = null;

  constructor(private readonly postRepository: PostRepository) {
    makeObservable(this, {
      posts: observable,
      page: observable,
      totalCount: observable,

      setPage: action.bound,
      fetchPosts: action.bound,
    });
  }

  setPage(page: number) {
    this.page = page;
  }

  async fetchPosts(): Promise<void> {
    const posts = await this.postRepository.fetchPosts();
    const copied = [...posts];

    const sorted = copied.sort(
      (x, y) =>
        new Date(y.createdAt).valueOf() - new Date(x.createdAt).valueOf(),
    );

    const paginated = new Page(sorted)
      .skip(this.page * POST_COUNT_PER_FETCH)
      .take(POST_COUNT_PER_FETCH);

    runInAction(() => {
      this.posts = paginated;
      this.totalCount = posts.length;
    });
  }
}

export default new PostStore(new PostRepository());
