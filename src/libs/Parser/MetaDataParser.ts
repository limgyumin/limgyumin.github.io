type MetaData = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

class MetaDataParser {
  private readonly initializer: MetaData;

  constructor() {
    this.initializer = {
      title: "",
      description: "",
      category: "",
      createdAt: "",
    };
  }

  parse(content: string): MetaData {
    const regExp = /(\w+):\s?(.+)/gm;
    const matchedList = [...content.matchAll(regExp)];

    const metaData = matchedList.reduce((acc, matched) => {
      const [, key, value] = matched;

      const hasProperty = Object.prototype.hasOwnProperty.call(
        this.initializer,
        key,
      );

      if (hasProperty && value != null) {
        acc[key as keyof MetaData] = value;
      }

      return acc;
    }, this.initializer);

    return metaData;
  }
}

export default MetaDataParser;
