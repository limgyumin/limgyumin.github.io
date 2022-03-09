import Extractor from "./Extractor";

class ArticleExtractor implements Extractor {
  extract(content: string): string {
    const excludeMetaData = /---\n.*?\n---\n?/ms;

    return content.replace(excludeMetaData, "");
  }
}

export default ArticleExtractor;
