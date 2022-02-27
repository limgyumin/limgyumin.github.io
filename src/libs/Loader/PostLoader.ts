import FileImporter from "../Importer/FileImporter";

import { PostInitializer } from "@/models/Post";
import { PostDetailInitializer } from "@/models/PostDetail";

import MetaDataExtractor from "../Extractor/MetaDataExtractor";
import ArticleExtractor from "../Extractor/ArticleExtractor";

import postValidator from "../Validator/PostValidator";
import postDetailValidator from "../Validator/PostDetailValidator";
import MetaDataTransformer from "../Transformer/MetaDataTransformer";

class PostLoader {
  private static list: PostInitializer[] | null = null;

  constructor(private readonly importer: FileImporter) {}

  async loadOne(id: string): Promise<PostDetailInitializer> {
    const fileData = await this.importer.import(id);

    const metaData = new MetaDataTransformer(new MetaDataExtractor()).transform(
      fileData.data,
    );
    const article = new ArticleExtractor().extract(fileData.data);

    return postDetailValidator.validate({
      id: fileData.fileName,
      ...metaData,
      article,
    });
  }

  async loadAll(): Promise<PostInitializer[]> {
    if (PostLoader.list) {
      return PostLoader.list;
    }

    const files = await this.importer.importAll();

    const transformer = new MetaDataTransformer(new MetaDataExtractor());

    const posts = files.map(({ fileName, data }) => {
      const metaData = transformer.transform(data);
      return postValidator.validate({ id: fileName, ...metaData });
    });

    PostLoader.list = posts;

    return posts;
  }
}

const postContext = require.context("/_posts", false, /.md$/);

export default new PostLoader(new FileImporter(postContext));
