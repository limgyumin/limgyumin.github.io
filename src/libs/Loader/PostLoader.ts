import postImporter from "../Importer/PostImporter";

import { PostInitializer } from "@/models/Post";
import { PostDetailInitializer } from "@/models/PostDetail";

import ArticleExtractor from "../Extractor/ArticleExtractor";

import postValidator from "../Validator/PostValidator";
import postDetailValidator from "../Validator/PostDetailValidator";
import MetaDataTransformer from "../Transformer/MetaDataTransformer";

class PostLoader {
  private static list: PostInitializer[] | null = null;

  async loadOne(id: string): Promise<PostDetailInitializer> {
    const fileData = await postImporter.import(id);

    const metaData = new MetaDataTransformer().transform(fileData.data);
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

    const files = await postImporter.importAll();

    const transformer = new MetaDataTransformer();

    const posts = files.map(({ fileName, data }) => {
      const metaData = transformer.transform(data);
      return postValidator.validate({ id: fileName, ...metaData });
    });

    PostLoader.list = posts;

    return posts;
  }
}

export default new PostLoader();
