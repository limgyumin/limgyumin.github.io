import FileNameExtractor from "../Extractor/FileNameExtractor";

export type FileData = {
  fileName: string;
  data: string;
};

class FileImporter {
  constructor(private readonly context: __WebpackModuleApi.RequireContext) {}

  private async getData(path: string): Promise<FileData> {
    const originalPath = this.context(path);

    const fileName = new FileNameExtractor().extract(path);
    const data = await fetch(originalPath).then((res) => res.text());

    return { fileName, data };
  }

  async import(id: string): Promise<FileData> {
    const extractor = new FileNameExtractor();

    const found = this.context
      .keys()
      .find((path) => extractor.extract(path) === id);

    if (!found) {
      throw new Error(`File ${id} not found.`);
    }

    return this.getData(found);
  }

  async importAll(): Promise<FileData[]> {
    const files = await Promise.all(
      this.context.keys().map((path) => this.getData(path)),
    );

    return files;
  }
}

export default FileImporter;
