import { PostDetailInitializer } from "@/models/PostDetail";

import postImporter from "../Importer/PostImporter";
import postDetailValidator from "../Validator/PostDetailValidator";
import MetaDataTransformer from "../Transformer/MetaDataTransformer";
import ArticleExtractor from "../Extractor/ArticleExtractor";

class PostDetailLoader {
  async load(id: string): Promise<PostDetailInitializer> {
    const fileData = await postImporter.import(id);

    const metaData = new MetaDataTransformer().transform(fileData.data);
    const article = new ArticleExtractor().extract(fileData.data);

    return postDetailValidator.validate({
      id: fileData.fileName,
      ...metaData,
      article,
    });
  }
}

export default new PostDetailLoader();
