import PostLoader from "@/libs/Loader/PostLoader";

class CategoryRepository {
  async find(): Promise<string[]> {
    const posts = await new PostLoader().load();

    const categories: string[] = [];

    posts.forEach(({ category }) => {
      const exist = categories.find((item) => item === category);

      if (exist) return;

      categories.push(category);
    });

    return categories;
  }
}

export default CategoryRepository;
