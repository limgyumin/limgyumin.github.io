import { PostInitializer } from "@/models/post";

const initialized: PostInitializer = {
  title: "",
  description: "",
  category: "",
  createdAt: "",
};

class MetaDataParser {
  toObject(content: string): PostInitializer {
    const regExp = /(\w+):\s?(.+)/gm;
    const matchedList = [...content.matchAll(regExp)];

    const object: PostInitializer = matchedList.reduce((acc, matched) => {
      const [, key, value] = matched;
      const label = key as keyof PostInitializer;

      if (!Object.prototype.hasOwnProperty.call(initialized, label)) {
        throw new Error(`${key} is not a property of meta.`);
      }

      acc[label] = value;

      return acc;
    }, initialized);

    return object;
  }
}

export default MetaDataParser;
