import Extractor from "./Extractor";

class DateExtractor implements Extractor {
  extract(path: string): string {
    const regExp = /\d{4}-\d{1,2}-\d{1,2}/g;

    const matched = path.match(regExp);

    if (!matched) {
      throw new Error(`${path} has no matching result.`);
    }

    const [date] = matched;

    return date;
  }
}

export default DateExtractor;
