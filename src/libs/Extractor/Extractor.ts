interface Extractor {
  extract(content: string): string | string[];
}

export default Extractor;
