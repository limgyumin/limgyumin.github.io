import FileNameExtractor from "../Extractor/FileNameExtractor";

class FileLoader {
  constructor(private readonly context: __WebpackModuleApi.RequireContext) {}

  private async getText(originalPath: string): Promise<string> {
    return fetch(originalPath).then((res) => res.text());
  }

  async find(fileName: string): Promise<string> {
    const extractor = new FileNameExtractor();

    const found = this.context
      .keys()
      .find((path) => extractor.extract(path) === fileName);

    if (!found) {
      throw new Error(`${fileName} file not found.`);
    }

    const originalPath = this.context(found);

    return this.getText(originalPath);
  }

  async findAll(): Promise<string[]> {
    const originalPaths = this.context.keys().map(this.context) as string[];

    return Promise.all(originalPaths.map(this.getText));
  }
}

export default FileLoader;
