import Page from "@/utils/page";
import FileNameExtractor from "../Extractor/FileNameExtractor";
import FileLoader, { FileData } from "./FileLoader";

class SelectableFileLoader extends FileLoader {
  protected selected: string[] = [];
  private total: number = 0;

  constructor(protected readonly context: __WebpackModuleApi.RequireContext) {
    super(context);

    this.init();
  }

  private init(): void {
    this.selected = this.context.keys();
    this.total = 0;
  }

  where(compareFunc: (fileName: string) => boolean): this {
    const extractor = new FileNameExtractor();

    const filtered = this.selected.filter((path) =>
      compareFunc(extractor.extract(path)),
    );

    this.selected = filtered;

    return this;
  }

  paginate(offset: number, limit: number): this {
    this.total = this.selected.length;

    const paginated = new Page(this.selected).skip(offset).take(limit);

    this.selected = paginated;

    return this;
  }

  async getOne(): Promise<FileData> {
    const [path] = this.selected;
    const file = await this.load(path);

    this.init();

    return file;
  }

  async getMany(): Promise<{ files: FileData[]; total: number }> {
    const total = this.total || this.selected.length;
    const files = await this.loadAll(this.selected);

    this.init();

    return { files, total };
  }
}

export default SelectableFileLoader;
