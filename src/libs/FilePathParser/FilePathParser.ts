export type Item = {
  title: string;
  date?: string;
};

class FilePathParser {
  private validate(title: string, date?: string) {
    const isDate = /\d{4}-\d{1,2}-\d{1,2}/gi;
    const isTitle = /[a-z0-9ㄱ-힣\s$&+,:;=?@#|'<>.^*()%!-]+/gi;

    if (date && !date.match(isDate)) {
      throw new Error("Invalid date!");
    }

    if (!title.match(isTitle)) {
      throw new Error("Invalid title!");
    }
  }

  parse(path: string): Item | null {
    const regExp =
      /(.\/(?:[a-z_/]+)?)?(\d{4}-\d{2}-\d{2})?(?:-+)?([a-z0-9ㄱ-힣\s$&+,:;=?@#|'<>.^*()%!-]+)(\.[a-z]+)/im;

    const matched = path.match(regExp);

    if (!matched) {
      return null;
    }

    const [, , date, title] = matched;

    this.validate(date, title);

    return { title, date };
  }
}

export default FilePathParser;
