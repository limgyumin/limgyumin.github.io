import Extractor from "./Extractor";

class FileNameExtractor implements Extractor {
  extract(path: string): string {
    const regExp = /^\.\/([a-zA-Z_/]+)?|\.[a-z]+$/gm;

    return path.replace(regExp, "");
  }
}

export default FileNameExtractor;
