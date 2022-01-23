class FileLoader {
  constructor(private readonly context: __WebpackModuleApi.RequireContext) {}

  get paths() {
    return this.context.keys();
  }

  private getAllOriginalPaths() {
    return this.paths.map(this.context) as string[];
  }

  private async getText(originalPath: string): Promise<string> {
    return fetch(originalPath).then((res) => res.text());
  }

  async read(fileName: string): Promise<string> {
    const matched = this.paths.filter((path) => path.includes(fileName))[0];

    const originalPath = this.context(matched);

    return this.getText(originalPath);
  }

  async readAll(): Promise<string[]> {
    const originalPaths = this.getAllOriginalPaths();

    return Promise.all(originalPaths.map(this.getText));
  }
}

export default FileLoader;
