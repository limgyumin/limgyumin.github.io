import FileImporter from "./FileImporter";

const postContext = require.context("/_posts", false, /.md$/);

export default new FileImporter(postContext);
