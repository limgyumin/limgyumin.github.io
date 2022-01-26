import Validator from "../Validator/Validator";

class FilePathParser {
  parse(path: string): string[] {
    const regExp =
      /(.\/(?:[a-z_/]+)?)?(\d{4}-\d{2}-\d{2})?(?:-+)?([a-z0-9ㄱ-힣\s$&+,:;=?@#|'<>.^*()%!-]+)(\.[a-z]+)/im;

    const matched = path.match(regExp);

    if (!matched) {
      throw new Error("Invalid file path.");
    }

    const [, , createdAt, title] = matched;

    new Validator().isFilled(title).isDate(createdAt);

    return [title, createdAt];
  }
}

export default FilePathParser;
