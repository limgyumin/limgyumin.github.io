import MarkdownValidator from "../Validator/MarkdownValidator";
import FileLoader from "./FileLoader";

class MarkdownLoader extends FileLoader {
  async find(fileName: string): Promise<string> {
    new MarkdownValidator().validate(fileName);

    return super.find(fileName);
  }
}

const postsContext = require.context("/_posts", false, /\.md$/);

export default new MarkdownLoader(postsContext);
