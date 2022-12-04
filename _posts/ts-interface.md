---
title: Interface와 의존성 주입에 대해 알아 보자.
description: 클래스 간의 결합도가 높아서 생기는 문제는 어떤 것이 있을까요? 어떻게 결합도는 낮고 응집도를 높혀서 유연한 설계가 가능하도록 할 수 있을까요? 이번 글에서는 TypeScript의 Interface와 의존성 주입 (Dependency Injection)에 대해 알아보려 합니다.
createdAt: 2022-12-04
category: TypeScript
---

## Interface

TypeScript에서의 인터페이스는 일반적으로 타입 체킹을 위해 특정 데이터의 타입을 명시하고, 강제할 때 사용됩니다. 또는 인터페이스에서 정의한 프로퍼티와 메서드들을 클래스에서 구현하도록 강제하여 일관성을 유지할 수 있도록 하는 역할을 하기도 합니다.

클래스를 사용하는 환경에서 개발을 한다고 가정해 보죠. 인터페이스는 아주 좋은 역할을 해줍니다. 한번 예제를 통해 인터페이스를 사용하기 전/후의 차이를 봅시다.

## 예제

예시를 위해 Knife(칼) 라는 이름의 클래스를 만들었습니다. damage 프로퍼티가 존재하고, attack 메서드가 존재합니다. attack 메서드에는 Knife 클래스에 한정적인 구현이 존재한다고 가정하겠습니다.

```ts
class Knife {
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  attack(person: Person) {
    ...
  }
}
```

이제 칼을 휘두를 사람이 필요합니다. Person(사람) 이라는 이름의 클래스를 만듭니다. name 프로퍼티가 존재하고, 마찬가지로 attack 메서드가 존재합니다.

Person의 attack 메서드를 호출하면 내부에서 Knife의 attack 메서드를 호출하고, 파라미터로 전달한 사람을 척살합니다.

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  attack(person: Person) {
    const knife = new Knife(20);

    knife.attack(person);
  }
}
```

이제 살인을 할 준비가 되었습니다.

```ts
const chulsu = new Person("chulsu");
const younghui = new Person("younghui");

chulsu.attack(younghui);
```

철수는 영희를 죽였습니다.


## 원하는 사람만 무기를 바꿀 수 없다?

그런데 칼 말고 다른 무기를 사용하고 싶으면 어떨까요? 철수는 사실 대검 원툴이라 칼을 잘 사용하지 못 합니다.

그러나 현재 구현상으로는 Knife 클래스는 Person 클래스에 결합되어 있습니다. 결론적으로 무기를 바꿀 수 없는 것이죠. 귀속템이 돼버렸습니다. 만약 Knife 대신 다른 클래스를 적용하려면 Person 클래스 자체를 뜯어 고쳐야 합니다.

그렇게 되면 Person 클래스의 내부 구현이 변경되고, 철수만 무기를 바꾸려 했으나, 영희까지 무기가 바뀌게 됩니다. 영희는 칼 원툴이여서 대검을 잘 사용하지 못 합니다.

위와 같이 추가적인 기능을 다른 인스턴스의 영향 없이 유연하게 추가하려면 어떻게 해야 할까요?

## Interface를 사용한 추상화

칼을 무기라는 설계도의 구현체로 생각해 보면 어떨까요? 사실상 무기는 공격을 위한 것이므로 damage 프로퍼티와 attack 메서드는 공통적으로 존재할 것입니다.

```ts
interface Weapon {
  damage: number;

  attack(person: Person): void;
}
```

무기의 설계도 역할을 해줄 인터페이스를 만들었으니 Knife 클래스에 적용해 봅시다. 

implements 예약어를 사용해 Knife 클래스에서 Weapon 인터페이스에 대한 내용을 필연적으로 구현하도록 강제할 수 있습니다.

```ts
interface Weapon {
  damage: number;

  attack(person: Person): void;
}

class Knife implements Weapon {
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  attack(person: Person) {
    ...
  }
}

class Sword implements Weapon {
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  attack(person: Person) {
    ...
  }
}
```

철수를 위한 대검을 만들려고 Weapon 인터페이스를 구현하는 Sword 클래스도 하나 추가했습니다.

이제 Knife는 곧 Weapon이고, Sword도 곧 Weapon입니다.

🤷🏻‍♂️: ㅇ? 그래서 뭐가 달라졌는데요?

아직 한 가지 남았습니다.

## 의존성 주입 (Dependency Injection)

Person 클래스에서 Weapon 인터페이스를 타입으로 하는 weapon 프로퍼티를 추가합니다.
그리고 Person의 attack 메서드에서는 weapon 프로퍼티의 attack 메서드를 호출하도록 변경해 보겠습니다.

```ts
class Person {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack(person: Person) {
    this.weapon.attack(person);
  }
}
```

Knife와 Sword 모두 Weapon 인터페이스를 구현하고 있으니, 이는 모두 Weapon이나 마찬가지입니다. 따라서 Person 클래스의 생성자로 Weapon에 대한 인스턴스를 주입해서 사용할 수 있습니다.

철수에게는 Sword 클래스의, 영희에겐 Knife 클래스의 인스턴스를 주입해줍니다. 철수와 영희의 손에 각각 **무기(Weapon)**를 쥐어줬습니다.

```ts
const chulsu = new Person("chulsu", new Sword(50));
const younghui = new Person("younghui", new Knife(20));

chulsu.attack(younghui);
```

철수는 대검을 쓸 수 있어 행복합니다. 너무 행복한 나머지 대검으로 영희를 죽여버렸습니다.

이와 같이 클래스 외부에서 생성한 인스턴스를 주입 받는 것을 **의존성 주입 (Dependency Injection)**이라고 합니다.

특정 클래스가 다른 클래스에 의존되지 않고, 어떤 의존성을 사용할지를 외부에서 제어할 수 있습니다. 그러면 특정 클래스에서 어떤 인스턴스의 기능을 사용할지 지정하지 않고도 주입 받은 클래스의 기능을 사용할 수 있는 것이죠.

결론적으로 다른 종류의 무기가 추가되더라도 Person 클래스에 주입만 해주면 내부 구현을 수정하지 않고도 사용할 수 있게 됩니다. 결합도는 낮아졌고, 응집도는 높아졌습니다.
