import SelectableFileLoader from "./SelectableFileLoader";
import DateExtractor from "../Extractor/DateExtractor";
import TitleExtractor from "../Extractor/TitleExtractor";

class PostLoader extends SelectableFileLoader {
  where(compareFunc: (title: string) => boolean): this {
    const extractor = new TitleExtractor();

    const filtered = this.selected.filter((path) =>
      compareFunc(extractor.extract(path)),
    );

    this.selected = filtered;

    return this;
  }

  orderByDate(order: "ASC" | "DESC" = "DESC"): this {
    const extractor = new DateExtractor();

    const sorted = [...this.selected].sort((x, y) => {
      const xDate = extractor.extract(x);
      const yDate = extractor.extract(y);

      switch (order) {
        case "ASC":
          return new Date(xDate).valueOf() - new Date(yDate).valueOf();
        case "DESC":
          return new Date(yDate).valueOf() - new Date(xDate).valueOf();
        default:
          throw new Error("Invalid order method.");
      }
    });

    this.selected = sorted;

    return this;
  }
}

const postContext = require.context(
  "/_posts",
  false,
  /\d{4}-\d{1,2}-\d{1,2}-.+\.md$/,
);

export default new PostLoader(postContext);
