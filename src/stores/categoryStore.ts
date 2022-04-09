import { action, makeObservable, observable, runInAction } from "mobx";

import CategoryRepository from "@/repositories/categoryRepository";

class CategoryStore {
  categories: string[] | null = null;

  constructor() {
    makeObservable(this, {
      categories: observable,

      fetch: action.bound,
    });
  }

  async fetch(): Promise<void> {
    const categories = await new CategoryRepository().find();

    runInAction(() => {
      this.categories = categories;
    });
  }
}

export default new CategoryStore();
