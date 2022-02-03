import Validator from "./Validator";

class ObjectValidator<T extends object, K extends object>
  implements Validator<K>
{
  constructor(private readonly object: T) {}

  private isAllPropertyHasValue(): boolean {
    const keys = Object.keys(this.object) as (keyof T)[];

    return keys.every((key) => this.object[key] != null);
  }

  private hasProperty(value: string): boolean {
    // Object.prototype을 상속 받지 않은 객체의 경우 hasOwnProperty 메소드가 존재하지 않기 때문.
    return Object.prototype.hasOwnProperty.call(this.object, value);
  }

  validate(target?: K) {
    if (target) {
      Object.keys(target).forEach((key) => {
        if (!this.hasProperty(key)) {
          throw new Error(`${key} is not a property of object`);
        }
      });
    }

    if (!this.isAllPropertyHasValue()) {
      throw new Error("Object doesn't have all properties.");
    }
  }
}

export default ObjectValidator;
