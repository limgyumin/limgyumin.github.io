import markdownLoader from "@/libs/FileLoader/MarkdownLoader";
import FilePathParser from "@/libs/FilePathParser/FilePathParser";
import Post from "@/models/post";

class PostRepository {
  fetchPosts(): Post[] {
    const { paths } = markdownLoader;

    const parser = new FilePathParser();

    const posts = paths.map((path) => {
      const [title, createdAt] = parser.parse(path);

      return new Post(title, createdAt);
    });

    return posts;
  }
}

export default PostRepository;
