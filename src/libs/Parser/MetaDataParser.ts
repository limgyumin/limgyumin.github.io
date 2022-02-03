type MetaData = { [key: string]: string | null };
class MetaDataParser {
  toObject(content: string): MetaData {
    const regExp = /(\w+):\s?(.+)/gm;
    const matchedList = [...content.matchAll(regExp)];

    const object: MetaData = matchedList.reduce((acc, matched) => {
      const [, key, value] = matched;
      const label = key as keyof MetaData;

      acc[label] = value;

      return acc;
    }, {} as MetaData);

    return object;
  }
}

export default MetaDataParser;
