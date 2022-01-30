import Extractor from "./Extractor";

class FileNameExtractor implements Extractor {
  // path로 부터 fileName을 추출함 ({createdAt}-{title})
  extract(path: string): string {
    const regExp = /^\.\/([a-zA-Z_/]+)?|\.[a-z]+$/gm;

    return path.replace(regExp, "");
  }
}

export default FileNameExtractor;
