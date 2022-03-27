import { PostInitializer } from "@/models/Post";

import postImporter from "../Importer/PostImporter";
import postValidator from "../Validator/PostValidator";
import MetaDataTransformer from "../Transformer/MetaDataTransformer";

class PostLoader {
  private static list: PostInitializer[] | null = null;

  async load(): Promise<PostInitializer[]> {
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
