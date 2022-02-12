import Extractor from "./Extractor";

class TitleExtractor implements Extractor {
  extract(path: string): string {
    const regExp = /^\.\/([a-zA-Z_/]+)?\d{4}-\d{1,2}-\d{1,2}-|\.[a-z]+$/gm;

    return path.replace(regExp, "");
  }
}

export default TitleExtractor;
