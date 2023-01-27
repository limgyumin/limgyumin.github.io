---
title: TypeScript의 Type Guard에 대해 알아 보자
description: Union 타입과 같이 여러 타입이 될 수 있는 모호한 타입을 다룰 때 어떻게 타입을 좁혀서 사용할 수 있을까요? 이번 글에서는 TypeScript의 Type-Guard 개념에 대해 알아보려 합니다.
createdAt: 2023-1-27
category: TypeScript
---

## Type Guard

Type Guard는 TypeScript 컴파일러가 타입을 예측할 수 있도록 타입을 좁혀서 보다 안전한 타입을 보장받을 수 있습니다.

타입을 좁힐 수 있는 방법은 정말 많습니다. 우선 타입 좁히기 개념에 대해 알아보고, 다양한 타입 좁히기 방법들을 알아봅시다.

## 타입 좁히기

다음과 같은 상황을 예로 들어 볼까요?

```ts
const func = (value: string | number) => {
   return value.slice(0, 1);
}
```

`String.prototype.slice()` 메서드는 string 타입의 변수에만 사용할 수 있습니다. 위와 같이 value의 타입이 온전히 string으로 보장받지 못 하는 상태에서는 string 타입의 메서드를 사용할 수 없습니다.

이런 경우에 typeof를 사용해서 타입을 좁혀볼 수 있습니다.

```ts
const func = (value: string | number) => {
  if (typeof value === 'string') {
    return value.slice(0, 1); // string
  }
  
  return value // number
}
```

typeof를 사용한 if문 블럭에 한정하여 value의 타입이 string으로 좁혀집니다.

if문에서 return을 하고 있기 때문에 이후의 코드에서는 value의 타입이 number로 보장됩니다. 그렇지 않다면 `string | number` 타입이 됩니다.

오우 타입 좁히기가 어떤 개념인지 알았습니다.

하지만 위와 같은 예제 외에도 typeof 만으로 해결할 수 없는 케이스들이 있습니다.

## Null Check

```ts
const element = document.getElementById("id");

element.style.backgroundColor = 'black';
```

위와 같은 예제에서 element의 타입은 `HTMLElement | null`이기 때문에 HTMLElement 타입으로 보장되지 않아 style 프로퍼티에 접근할 수 없습니다.

🤷🏻‍♂️: 아니 그럼 HTMLElement 타입은 객체 타입이니까 typeof를 사용해서 object 타입인지 체크하면 되잖아요

```ts
const element = document.getElementById("id");

if (typeof element === 'object') {
  element.style.backgroundColor = 'black';
}
```

오 된다...!

는 구라고 안됩니다. 왜냐하면 element는 `HTMLElement | null` 타입이고 JavaScript에서 null은 object 타입으로 취급되기 때문입니다.

🤦🏻‍♂️: 하... 빽드릴킥 마렵네

```ts
const element = document.getElementById("id");

if (element === null) { // 또는 if (element) {
  element.style.backgroundColor = 'black';
}
```

방법은 정말 간단합니다. 값 자체가 null인지 체크하거나, 존재 유무를 체크하면 해결됩니다.

하지만 만약 기본형 값이 잘못된 경우에는 존재 유무로 체크했을 때 타입이 좁혀지지 않습니다.

```ts
const func = (value: string | number | null) => {
  if (!value) {
    value // string | number | null
  }
}
```

위와 같은 경우에 value의 타입은 null이 될 것이라 예상했지만, ''과 0 모두 falsy 한 값이므로 타입이 좁혀지지 않았습니다.

## Array.isArray()

```ts
const func = (value: string | string[]) => {
  // 배열 타입 보장 X, Array.prototype.map() 메서드 사용 불가
  value.map((value) => ...); 
}
```

Union 타입에 배열 타입이 포함되어 있는 경우 Array.isArray() 함수로 타입을 좁힐 수 있습니다.

```ts
const func = (value: string | string[]) => {
  if (Array.isArray(value)) {
    value.map((value) => ...); // string[];
  }
}
```

## 명시적 태그 기법

객체 타입으로 이루어진 Union 타입에서 공통되는 프로퍼티를 두는 명시적 태그 기법을 통해 타입을 좁힐 수 있습니다.

```ts
type Success = {
  result: 'success',
  data: object,
}

type Failure = {
  result: 'failure',
  reason: string,
}

type Response = Success | Failure;

const func = (response: Response) => {
  switch(response.result) {
    case 'success':
      response // Success
      break;
    case 'failure':
      response // Failure
      break;
  }
}
```

result 프로퍼티를 태그로 사용하고, 값에 따라 해당하는 객체 타입으로 타입이 좁혀집니다.

## in

또한 위의 예제에서 다른 방법으로, in 키워드로 특정 프로퍼티가 객체에 속하는지 체크하여 해당하는 객체 타입으로 좁힐 수 있습니다.

```ts
const func = (response: Response) => {
  if ('data' in response) {
    response // Success
  }

  if ('reason' in response) {
    response // Failure
  }
}
```

만약 위의 예제에서 in 키워드를 사용하여 Success와 Failure 타입에 공통으로 존재하는 result 프로퍼티가 response 객체에 속하는지를 체크하면 타입이 좁혀지지 않습니다.

```ts
const func = (response: Response) => {
  if ('result' in response) {
    response // Success | Failure
  }
}
```

## User-Defined Type Guard

TypeScript가 타입을 제대로 식별하지 못할 때, 사용자 정의 Type Guard를 사용하여 타입을 좁힐 수도 있습니다.

```ts
const element = document.getElementById("id");

if (element === null) {
  return;
}

if ('value' in element) {
  element
}
```

`document.getElementById()` 메서드를 통해 가져왔을 때 element의 타입은 `HTMLElement | null`입니다. 우리는 input 요소를 가져올 것이라 가정하고, 요소만의 프로퍼티를 사용하고자 value 프로퍼티가 element 객체에 속하는지 체크해서 HTMLInputElement 타입으로 좁히고자 합니다.

두 번째 if문 안의 element의 타입을 볼까요?

💁🏻‍♂️: HTMLElement 타입인데 value 프로퍼티를 가지고 있으면 HTMLInputElement 타입이겠지? 오예 난 개쩔어 난 천재야

```ts
HTMLElement & Record<"value", unknown>
```

TS: HTMLElement 타입인데 value 프로퍼티를 가지고 있으면 HTMLElement 타입에서 value 프로퍼티가 확장된 타입이겠지 엌ㅋㅋㅋ

타입이 이상하게 좁혀졌습니다..? HTMLInputElement 타입은 HTMLElement의 확장된 타입이기 때문에 TypeScript는 HTMLElement 타입만으로 value 프로퍼티가 포함되었다고 해서 HTMLInputElement 타입이라고 보장할 수가 없는 것입니다.

그럼 사용자 정의 Type Guard를 사용해서 input 요소 타입임을 보장하면 어떨까요?

```ts
const isInputElement = (element: HTMLElement): element is HTMLInputElement => {
  return 'value' in element;
}

const element = document.getElementById("id");

if (element === null) {
  return;
}

if (isInputElement(element)) {
  element // HTMLInputElement
}
```

타입을 좁히기 위한 조건 함수를 구현했고, 반환 타입에서 is 키워드를 사용하여 어떤 값이 어떤 타입이라고 강제로 보장했습니다. 결론적으로 조건문 내의 element의 타입은 HTMLInputElement가 됩니다.

🤷🏻‍♂️: 아니 강제로 보장한다뇨. 겁나 위험한 거 아닌가요?

그래서 사용할 때 주의해야 할 점은 타입이 보장될 수 있는 명확한 조건이 포함되어야 한다는 것입니다. 그렇지 않으면 단순히 타입을 단언시키는 것과 다를 게 없습니다.

사실 value 프로퍼티 존재 여부만으로 input 요소임을 확정지을 수는 없습니다. input 요소 외에도 value 프로퍼티를 가진 요소 타입이 있으니까요.

위의 예제의 경우에는 우리가 이미 element가 input 요소임을 알고 있습니다. 따라서 value 프로퍼티를 가진 타입이지만 우리는 이걸 input 요소로만 사용할 것이라는 일종의 약속의 개념인 것이죠.

한 가지 더 실용적인 예시를 볼까요?

```ts
const func = (arr: (string | undefined)[]) => {
   const filtered = arr.filter((item) => item !== undefined);

   filtered // (string | undefined)[]
}
```

배열 요소의 타입이 undefined가 될 수도 있는 타입의 경우 `Array.prototype.filter()` 메서드를 통해 정의된 값들만 필터링 하려고 했는데...

분명 필터링을 했음에도 filtered의 타입이 `string[]` 타입으로 좁혀지지 않습니다.

```ts
interface Array<T> {
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  ...
}
```

TypeScript에서의 filter 메서드 인터페이스입니다. 한 메서드 인터페이스가 두 가지로 오버로딩 되어 있으며, 기본적으로는 두 번째 메서드의 인터페이스를 사용할 것입니다.

반환 타입을 보시면 아시다시피 Array 인터페이스의 제네릭을 그대로 배열 타입으로 반환하고 있어 predicate 함수 내의 로직에 의해 변경된 타입을 추론하지 못 하는 것입니다.

첫 번째 filter 메서드의 인터페이스를 보시면 Array 인터페이스의 제네릭에 할당될 수 있는 새로운 제네릭 타입 S를 만들었고, predicate 함수에서 변경된 S 타입으로 보장할 수 있도록 반환 타입에 is 키워드가 포함되어 있죠?

그 말은 즉슨 사용자 정의 Type Guard를 적용해서 변경된 타입으로 반환 타입을 추론 시킬 수 있다는 의미일 것 같습니다.

한번 사용자 정의 Type Guard를 적용해볼까요?

```ts
const isDefined = <T>(value: T | undefined): value is T => {
  return value !== undefined;
}

const func = (arr: (string | undefined)[]) => {
  const filtered = arr.filter(isDefined);

  filtered // string[]
}
```

와우 성공적으로 `string[]` 타입으로 좁혀졌습니다.

