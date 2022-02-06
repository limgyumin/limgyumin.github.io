import Post, { PostInitializer } from "@/models/post";

import markdownLoader from "@/libs/FileLoader/MarkdownLoader";
import MetaDataExtractor from "@/libs/Extractor/MetaDataExtractor";
import MetaDataParser from "@/libs/Parser/MetaDataParser";
import ObjectComparator from "@/libs/Comparator/ObjectComparator";
import Validator from "@/libs/Validator/Validator";
import { isNotEmpty } from "@/libs/Validator/validations/util";
import {
  isFixedDateFormat,
  isFixedFileName,
} from "@/libs/Validator/validations/post";

class PostRepository {
  async fetchPosts(): Promise<Post[]> {
    const files = await markdownLoader.findAll();

    const extractor = new MetaDataExtractor();
    const parser = new MetaDataParser();
    const comparator = new ObjectComparator();

    const posts = files.map(({ fileName, data }) => {
      const metaData = parser.toObject(extractor.extract(data));
      const postData = { id: fileName, ...metaData } as PostInitializer;

      const post = new Post(postData);

      comparator.compare(post, metaData);

      new Validator(post).validate({
        id: [isFixedFileName],
        title: [isNotEmpty],
        description: [isNotEmpty],
        category: [],
        createdAt: [isFixedDateFormat],
      });

      return post;
    });

    return posts;
  }
}

export default PostRepository;
