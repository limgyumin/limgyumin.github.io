import FileNameExtractor from "../Extractor/FileNameExtractor";

export type FileData = {
  fileName: string;
  data: string;
};

class FileLoader {
  constructor(protected readonly context: __WebpackModuleApi.RequireContext) {}

  private async getData(path: string): Promise<string> {
    const originalPath = this.context(path);

    return fetch(originalPath).then((res) => res.text());
  }

  async load(path: string): Promise<FileData> {
    const fileName = new FileNameExtractor().extract(path);

    const data = await this.getData(path);

    return { fileName, data };
  }

  async loadAll(paths: string[]): Promise<FileData[]> {
    const files = await Promise.all(paths.map((path) => this.load(path)));

    return files;
  }
}

export default FileLoader;
