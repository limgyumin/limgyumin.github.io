import Extractor from "./Extractor";
import MetaDataValidator from "../Validator/MetaDataValidator";

class MetaDataExtractor implements Extractor {
  extract(value: string): string {
    const regExp = /(---\n)(.*?)(\n---)/ms;
    const matched = value.match(regExp);

    if (!matched) {
      throw new Error(`${value} has no matching result.`);
    }

    const [, , metaData] = matched;

    new MetaDataValidator().validate(metaData);

    return metaData;
  }
}

export default MetaDataExtractor;
