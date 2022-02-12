import Post from "@/models/Post";

import postLoader from "@/libs/FileLoader/PostLoader";
import MetaDataExtractor from "@/libs/Extractor/MetaDataExtractor";
import MetaDataParser from "@/libs/Parser/MetaDataParser";

type FetchPostsResponse = {
  posts: Post[];
  total: number;
};

type PaginationArgs = {
  offset: number;
  limit: number;
};

class PostRepository {
  async fetchPosts({
    offset,
    limit,
  }: PaginationArgs): Promise<FetchPostsResponse> {
    const { files, total } = await postLoader
      .orderByDate()
      .paginate(offset, limit)
      .getMany();

    const extractor = new MetaDataExtractor();
    const parser = new MetaDataParser();

    const posts = files
      .map(({ fileName, data }) => {
        try {
          const metaData = parser.parse(extractor.extract(data));
          return Post.makeInstance({ id: fileName, ...metaData });
        } catch (e) {
          return null;
        }
      })
      .filter((post): post is Post => post != null);

    return { posts, total };
  }
}

export default PostRepository;
