import FileNameExtractor from "../Extractor/FileNameExtractor";

type FileData = {
  fileName: string;
  data: string;
};

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

  async findAll(): Promise<FileData[]> {
    const extractor = new FileNameExtractor();

    const fileDataList: FileData[] = await Promise.all(
      this.context.keys().map(async (path) => {
        const data = await this.getText(this.context(path));
        const fileName = extractor.extract(path);

        return { fileName, data };
      }),
    );

    return fileDataList;
  }
}

export default FileLoader;
