import MetaDataExtractor from "../Extractor/MetaDataExtractor";

type MetaData = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

const initializer: MetaData = {
  title: "",
  description: "",
  category: "",
  createdAt: "",
};

class MetaDataTransformer {
  constructor(private readonly extractor: MetaDataExtractor) {}

  transform(content: string): MetaData {
    const metaDataStr = this.extractor.extract(content);

    const includeMetaDataLine = /(\w+):\s?(.+)/gm;
    const matchedList = [...metaDataStr.matchAll(includeMetaDataLine)];

    const metaData = matchedList.reduce((acc, matched) => {
      const [, key, value] = matched;

      const hasProperty = Object.prototype.hasOwnProperty.call(
        initializer,
        key,
      );

      if (hasProperty && value != null) {
        acc[key as keyof MetaData] = value;
      }

      return acc;
    }, initializer);

    return metaData;
  }
}

export default MetaDataTransformer;
