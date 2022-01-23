import FilePathParser, { Item } from "../FilePathParser/FilePathParser";
import FileLoader from "./FileLoader";

class MarkdownLoader extends FileLoader {
  findAllWithFormat(): Item[] {
    const list: Item[] = [];

    const parser = new FilePathParser();

    this.paths.forEach((path) => {
      const item = parser.parse(path);

      if (item != null) {
        list.push(item);
      }
    });

    return list;
  }
}

const postsContext = require.context("@/_posts", false, /\.md$/);

export default new MarkdownLoader(postsContext);
