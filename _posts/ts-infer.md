---
title: TypeScript의 Infer에 대해 알아 보자
description: 객체나 배열과 같은 복잡한 타입에서 특정 요소의 타입만 가져오고 싶을 때가 있지 않으신가요? 이번 글에서는 TypeScript의 기능 중 Infer에 대해 알아보려 합니다.
createdAt: 2023-01-23
category: TypeScript
---

## Infer...?

infer는 조건부 타입에서 조건식이 참으로 평가될 때, 비교식에서 대응되는 특정 타입을 추론해 내는 기능입니다.

🤷🏻‍♂️: 아니 이게 뭔 뚱딴지 같은 소립니까? 조건부 타입은 또 뭔데요?

👤: 스미마셍..

설명만으로는 부족하니 조건부 타입에 대해 간단히 알아보고 예제와 함께 Infer에 대해 알아 봅시다.

### Condition Type

조건부 타입을 간단히 말씀드리자면 특정 타입이 비교 대상 타입에 할당 될 수 있는지 비교하고, 참/거짓 분기로 타입을 반환할 수 있습니다.

```ts
T extends U ? X : Y
```

기본 형태는 위와 같습니다. 특정 타입(T)이 비교 대상 타입(U)에 할당될 수 있는지 비교하고 참일 경우 X 타입을, 거짓일 경우 Y 타입을 반환합니다.

실제 사용 케이스를 예로 들어봅시다. 만약 어떤 타입이 올지 모르는 제네릭 타입이 배열 타입에 할당될 수 없다면, never 타입을 반환하는 타입을 어떻게 구현할 수 있을까요?

```ts
type IsArray<T> = T extends unknown[] ? T : never;
```

위 처럼 조건부 타입을 사용해서, 제네릭 타입이 배열 타입에 할당될 수 있는지 비교하고, 할당될 수 있으면 그 타입을 반환하고, 그렇지 않은 경우 never 타입을 반환하도록 구현하면 됩니다.

```ts
type A = IsArray<number[]>; // 배열 타입에 할당 가능하므로 number[]
type B = IsArray<number>; // 배열 타입에 할당할 수 없으므로 never
```

결과는 아시다시피 위와 같습니다.

좋습니다. 우리는 이제 조건부 타입을 어느정도 알게되었습니다. 오예

여기서 억지스럽지만 한 가지 요구사항을 바꿔봅시다. 만약 배열 타입에 할당 가능할 경우 배열의 요소에 대한 타입을 반환할 수는 없을까요?

```ts
type NumberArrayElement<T> = T extends number[] ? number : never;
```

number[] 타입일 경우에 number를 반환하도록 구현해 봤습니다. 사실상 number[] 타입만이 할당될 수 있으므로 아닌 경우 무조건 never를 반환할 것입니다.

🤷🏻‍♂️: 아니 그러면 다른 배열 요소 타입을 반환하고 싶으면 어떡하란 말입니까?

그럴 때 우리는 `infer`를 사용할 수 있습니다.

## Infer!

자, 조건부 타입까지는 알았으니 예제를 통해 infer에 대해 알아봅시다.

```ts
T extends infer U ? U : T;
```

기본적인 사용법은 위와 같습니다. 특정 타입(T)이 비교 대상 타입(U)에 할당될 수 있는지 비교하고 참일 경우 비교 대상 타입(U)을 반환하고, 그렇지 않으면 특정 타입(T)을 반환합니다.

제가 조건부 타입에 대해 말씀드린 이유가 있습니다. infer는 조건부 타입 구문에서만 사용할 수 있습니다. 또한 조건이 참일 경우 반드시 infer를 통해 생성한 타입을 포함하고 있는 타입을 반환해야 합니다.

어라 그런데 생긴게 조건부 타입과 별반 다를 게 없어 보이죠? 사실 위의 예제처럼 사용하면 아무런 의미가 없습니다. 설명을 조금 더 드린 뒤 실제 사용 케이스와 함께 보시죠.

### Infer는 타입을 추론한다?

infer는 조건부 타입 구문에서 비교식이 참인 경우, 비교식에서 대응되는 타입을 추론해냅니다. infer 키워드를 사용하면 비교식에서 대응되는 타입을 추론하는 타입을 생성합니다.

```ts
T extends infer U ? U : T;
```

기본적인 사용법으로 보여드린 위의 예제에서의 비교식이 참인 경우, U 타입은 T 타입과 대응합니다. 따라서 U 타입은 자연스레 T 타입으로 추론이 가능한 것이죠.

아직 잘 감이 오지 않죠? 실제 사용 케이스를 예시로 들어봅시다.

아까 조건부 타입에 대한 예시 설명의 마지막 내용에서 이런 의문을 가졌었죠?

> 🤷🏻‍♂️: 아니 그러면 다른 배열 요소 타입을 반환하고 싶으면 어떡하란 말입니까?

특정 타입이 비교 대상 타입에 할당될 수 있으면 비교식에서 대응되는 배열의 요소에 대해 추론된 타입을 반환하려면 어떻게 타입을 구현해야 할까요?

```ts
type ArrayElement<T> = T extends (infer U)[] ? U : never;
```

위와 같이 구현할 수 있겠습니다. 비교식이 참이라면 T 타입은 배열 타입일 테니, 비교식에서 `infer U`에 대응되는 부분은 배열의 요소이므로 T 타입의 배열 요소에 해당하는 추론된 U 타입을 반환하도록 하면 되겠네요!

```ts
type A = ArrayElement<number[]>; // number
type B = ArrayElement<string[]>; // string
type C = ArrayElement<boolean>; // never
```

결과는 다음과 같습니다. C 타입의 경우 boolean 타입은 배열 타입에 할당될 수 없으므로 위의 조건부 타입에 의해 never 타입이 반환됩니다.

### Infer가 추론하고자 하는 타입이 여러 개라면?

infer는 비교식에 대응되는 타입을 추론한다는 사실을 알았습니다. 그럼 만약 infer를 사용한 동일한 추론 가능한 타입을 중복하여 사용한다면, 즉 추론하고자 하는 타입이 여러 개라면 어떨까요?

```ts
type UserProperties<T> = T extends { id: infer U, name: infer U } ? U : never;
```

```ts
type User = { id: string, name: number };

type A = UserProperties<User>;
```

위의 예제의 UserProperties 타입에서 T 객체 타입의 id와 name 프로퍼티에 대응되는 타입을 중복되는 infer U로 추론하고자 했을 때, 어떤 결과가 나올까요?

```ts
type A = UserProperties<User>; // string | number
```

중복하여 infer를 사용하면 가장 먼저 사용된 infer에서 추론한 타입이 반환될 것 같기도 하지만 TypeScript는 그렇게 못 만들지 않았습니다.

추론 가능한 타입이 여러 개인 경우, 추론 가능한 모든 타입의 합집합인, 즉 유니온 타입이 반환됩니다.

자, 이제 infer에 대해 알았습니다. 완벽한 이해를 위해 예제를 좀 더 볼까요?

### Examples

TypeScript에는 이미 구현된 많은 유틸리티 타입들이 존재합니다. 이 유틸리티 타입들은 제네릭, 인덱스 시그니처, 매핑된 타입, 그리고 infer를 사용하여 구현되어 있죠.

본 글의 주제인 infer를 사용하여 만든 유틸리티 타입을 한번 봅시다.

```ts
type A = Parameters<(x: number) => number>; // [x: number]
```

Parameters 타입은 함수 타입을 전달하면 함수 타입의 파라미터에 대응되는 추론된 타입을 반환합니다.

뭔가 어떻게 구현 되어 있을지 예상이 가죠?

```ts
type Parameters<T extends (...args: any) => any> =
    T extends (...args: infer P) => any ? P : any;
```

실제 구현체에 의하면 제네릭 타입에 함수 타입만을 할당할 수 있도록 타입 한정자도 포함되어 있습니다. 본 글의 주제에서 크게 중요한 건 아니고, 조건부 타입 구문만 봅시다.

T 타입이 함수 타입에 할당할 수 있으면, T 타입은 함수 타입입니다. 조건식에서 대응되어야 할 부분은 함수의 파라미터 타입이므로, 파라미터 타입에 infer를 사용해 추론할 P 타입이 대응되도록 하고, 참일 경우 반환하도록 합니다.

infer에 대해 이해하고 있는 우리에겐 너무 쉬워서 헛웃음이 나옵니다. ㅋ

그럼 한 가지 더 볼까요? 함수의 파라미터가 아닌 반환 타입을 가져오려면 어떻게 구현하면 될까요?

```ts
type ReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer R ? R : any;
```

그냥 함수 타입의 반환 타입에 대응되도록 infer를 배치하면 됩니다.

좋습니다. 이제 우리는 infer에게 쫄지 않아도 됩니다.

💁🏼‍♂️: wow so easy. I'm infer master. holy shit let's go
