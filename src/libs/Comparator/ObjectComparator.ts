class ObjectComparator {
  compare(object: object, target: object) {
    Object.keys(target).forEach((key) => {
      // Object.prototype을 상속 받지 않은 객체의 경우 hasOwnProperty 메소드가 존재하지 않기 때문.
      const hasProperty = Object.prototype.hasOwnProperty.call(object, key);

      if (!hasProperty) {
        throw new Error(`${key} is not a property of object`);
      }
    });
  }
}

export default ObjectComparator;
