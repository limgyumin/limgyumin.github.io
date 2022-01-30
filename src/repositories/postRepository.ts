import Post from "@/models/post";
import markdownLoader from "@/libs/FileLoader/MarkdownLoader";
import MetaDataExtractor from "@/libs/Extractor/MetaDataExtractor";
import MetaDataParser from "@/libs/Parser/MetaDataParser";

class PostRepository {
  async fetchPosts(): Promise<Post[]> {
    const files = await markdownLoader.findAll();

    const extractor = new MetaDataExtractor();
    const parser = new MetaDataParser();

    const posts = files.map((file) => {
      const metaData = extractor.extract(file);

      return new Post(parser.toObject(metaData));
    });

    return posts;
  }
}

export default PostRepository;
