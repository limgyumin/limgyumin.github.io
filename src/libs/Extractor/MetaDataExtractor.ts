import Validator from "../Validator/Validator";
import Extractor from "./Extractor";

class MetaDataExtractor implements Extractor {
  extract(value: string): string {
    const regExp = /(---\n)(.*?)(\n---)/ms;
    const matched = value.match(regExp);

    if (!matched) {
      throw new Error(`${value} has no matching result.`);
    }

    const [, , metaData] = matched;

    new Validator().isMetaData(metaData);

    return metaData;
  }
}

export default MetaDataExtractor;
