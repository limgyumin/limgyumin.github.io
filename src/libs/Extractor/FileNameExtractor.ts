import Extractor from "./Extractor";

class FileNameExtractor implements Extractor {
  extract(path: string): string {
    const excludePathAndExtension = /^\.\/([a-zA-Z_/]+\/)?|\.[a-z]+$/gm;

    return path.replace(excludePathAndExtension, "");
  }
}

export default FileNameExtractor;
