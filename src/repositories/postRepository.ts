import Post, { PostInitializer } from "@/models/post";
import markdownLoader from "@/libs/FileLoader/MarkdownLoader";
import MetaDataExtractor from "@/libs/Extractor/MetaDataExtractor";
import MetaDataParser from "@/libs/Parser/MetaDataParser";
import ObjectValidator from "@/libs/Validator/ObjectValidator";

class PostRepository {
  async fetchPosts(): Promise<Post[]> {
    const files = await markdownLoader.findAll();

    const extractor = new MetaDataExtractor();
    const parser = new MetaDataParser();

    const posts = files.map((file) => {
      const metaData = parser.toObject(extractor.extract(file));
      const post = new Post(metaData as PostInitializer);

      new ObjectValidator(post).validate(metaData);

      return post;
    });

    return posts;
  }
}

export default PostRepository;
