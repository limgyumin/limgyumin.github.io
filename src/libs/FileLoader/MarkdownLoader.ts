import FileLoader from "./FileLoader";

import { isFixedFileName } from "../Validator/validations/post";
import Validator from "../Validator/Validator";

class MarkdownLoader extends FileLoader {
  async find(fileName: string): Promise<string> {
    new Validator({ fileName }).validate({ fileName: [isFixedFileName] });

    return super.find(fileName);
  }
}

const postsContext = require.context("/_posts", false, /\.md$/);

export default new MarkdownLoader(postsContext);
