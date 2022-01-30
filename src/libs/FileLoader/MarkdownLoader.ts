import Validator from "../Validator/Validator";
import FileLoader from "./FileLoader";

class MarkdownLoader extends FileLoader {
  async find(fileName: string): Promise<string> {
    new Validator().isFileName(fileName);

    return super.find(fileName);
  }
}

const postsContext = require.context("/_posts", false, /\.md$/);

export default new MarkdownLoader(postsContext);
