import FileLoader from "./FileLoader";

class MarkdownLoader extends FileLoader {}

const postsContext = require.context("@/_posts", false, /\.md$/);

export default new MarkdownLoader(postsContext);
