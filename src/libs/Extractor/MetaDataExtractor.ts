import Extractor from "./Extractor";

class MetaDataExtractor implements Extractor {
  extract(content: string): string {
    const regExp = /(---\n)(.*?)(\n---)/ms;
    const matched = content.match(regExp);

    if (!matched) {
      throw new Error(`${content} has no matching result.`);
    }

    const [, , metaData] = matched;

    return metaData;
  }
}

export default MetaDataExtractor;
