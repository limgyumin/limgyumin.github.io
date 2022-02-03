interface Validator<T> {
  // 조건을 검증하고 조건에 맞지 않으면 error를 throw하는 메서드
  validate(value?: T): void;
}

export default Validator;
