---
title: "My personal guide to use types in JS"
category: "Technology"
date: "2018-07-17"
tags: ['types', 'js', 'javascript', 'typescript']
---

> TLDR: Little history about how and why I started using types, if you want to read the guide go direct to the  [guide](#guide) section

It was 2015, I was an Angular Developer at the time, you remember that, it was the era of `directives`, `services`, `factories` and `controllers`. I was excited for the new announcent of Angular 2 and the moment arrived, they started showing the new architecture and **WHAT?!!** is that language?? are they crazy??  That was my first time I heard about **Typescript** and my first time where I fully embrace **React** :D.

I really didn't understand the need of types, Javascript is pretty cool you have the flexibility to do whatever you want, whenever you want. In contrary, of languages like **Java** where you have to write 500 lines of code to print *Hello World*, and after developing for 3 years with Java, I didn't want the same for Javascript.

## 5 years later

I have to admit, I was blind for my emotions, after 3 years I started understanding why types are important, but I never has the need to use in my previous jobs or personal projects. Now, I cannot live without them. There are two **must use** for *Typescript*:



* Libraries, are the most benefited from using types. Why? It's easy, as a Library you should export types to cover a growing group of developers using types. Therefore, creating types automatically from your source code remove a lot of overhead in the final product.
* Big teams/codebases, sharing information between team is hard, but is possible if the amount of information we need to share is small. For big teams is complicate to understand the whole codebase and mistakes will be made. Typescript helps for bigger refactors, for understanding external libraries or components , etc.

After using typescript for 7 months now, I can honest said, we should use typescript for any project that we transpile. Mostly, because the only throwback of using Typescript is the need to add a build system to transpile your code. Nowadays, most of our code is transpiled, so the last statement is almost always true.



##Guide

Let's start with what you should **not** do:

* You **must not** use generic types like, `any`, `object` and `array`. Using generics types make no sense, just  code in plain Javascript instead. I know sometimes is hard to create some types, I have been there triying to type `compose` and `pipe` functions. Trust me, if you can do that you can type anything you want.
* You **should not** use exclamation (*!*) to escape possible `undefined` or `null` values. The same as before, it is a pottential point of failure in your application, it safest to just check if the variable exist just before using it. Some places where I allowed the usage is inside tests, because usually test environments are different that real ones.
* You **must not** use enums. Check [enum](#enum) section for a better explanation

Ok, now we can start we basic typings.

> We are going to create a type definition for a D&D application

###Typing Javascript

Adding types into your code is quite straightforward, any valid Javascript code is also a compilable in Typescript. By default, It would try to infer the types based of the original values, yet, it's not possible to automatically identify everything.

When the compiler cannot deduce the type, transorm any unknown value into `any` on our code (We dont want this). I would suggest to start with a light *ts-config.json*, This is my current configuration for this blog:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": [
      "dom",
      "es2015",
      "es2017"
    ],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false,
    "preserveConstEnums": true
  },
  "include": [
    "./src/**/*"
  ]
}
```

It is a bit strict, but prevent from having unidentified types in our code 🙌🎉🙌.

### Types

There are four basic types `string`, `number`, `array`, or `object`, we can use it in any place of our code using *colon* (:) or in some cases we cast the value using `as` value.

```typescript
const aNumber: number = 1;
const aString: string = 'Hello';
const anArray: [] = []; // Bad, We should use non typed arrays
const aTypedArray: string[] = ['Hello', 'World']; // Good
const anObject: object = {}; // Bad, we should use interfaces or dynamic object instead

const aCustomString = '1' as CustomString; // Custom String is a type who contains '1'
```

We can create new types using different methods, the most basics are union (*|*), intersection (*&*) and aliases, As a example:

```typescript
type Races = 'humans' | 'elfs' | 'drows' | 'dwarf' | 'halfling'; // Union
type Name = string; // Alias
type BasicSheet = { name: Name } & { race: Races}; 

```

We are going to talked how to make more complex types in the [advance types](#advance-types) section.

### Interface

We use interface syntax  to describe plain objects, this work similar to Java and should be used when you want to define a object  with known attributes. A key difference between `type` and  `interface`, It`s that the last one can be *extended*, *implemented* or *extend* other interfaces. However, we cannot represent unions, intersections or simple types using interfaces.

#### Declaration

You can create an interface with any basic type (`string`, `number`, `array`, or `object`) and you can also use any type we are going to explain in this guide. This is a basic interface using only basic types.

```typescript
interface CharacterSheet {
  name: string,
  race: string,
  dndClass: string,
  stats: CharacterStats, // highlight-line
  level: number,
  skills: string[],
}
```

As you can noticed, we are using `object` type for the *stats* attribute and as I mentioned before this is a no go. Lucky for use we can use another interface as a type, like this,

```ts
interface CharacterStats {
  strength: number,
  dexterity: number,
  constitution: number,
  inteligence: number,
  wisdow: number,
  charisma: number,
  'hit-points': number,
}
```

If we do the same with the other attributes, we ends with this final interface:

```typescript
interface CharacterSheet {
  name: string,
  level: number,
  // highlight-start
  race: CharacterRace,
  dndClass: CharacterClass,
  stats: CharacterStats,
  skills: Skill[],
  // highlight-end
}
```

### Infered object

Typescript can infer all the basic types. Hence, when you create an object from scratch it, Typescript would infer the initial type of this variable as the initial keys with the respective basic type from the value. In other words, you will get a type error when trying to add a new key, or when you tried to change the type from an existing key.

> Tip:  If you have to create a partial object you can use `Partial<Object>` helper.

```typescript
const notypedCharacter = { name: 'Raistlin' };

notypedCharacter.level = 30; // Error: Property 'level' does not exist on type '{ name: string; }'
notypedCharacter.name = 1; // Error: Type '1' is not assignable to type 'string'

notypedCharacter.name = 'Caramon'; // It's valid
```

We need to take this into consideration, It's a common error and is hard to understand what is happening. My recommendation is always create an `interface`.

#### Mapped types

A most advance way to declare objects is creating dinamyc objects, let's write our skill interface using this method:

```typescript
type Stats =  'strength' | 'dexterity' | 'constitution' | 'inteligence' | 'wisdow' | 'charisma' | 'hit-points';
type CharacterStats = { [key in Stats]: number };
// Or in recent version we can use record instead
type CharacterStatsRecord = Record<Stats, number>;
```

We have a lot of benefits using dinamyc objects, such as, reusability of external type `Stats`, in this way we can create a function like:

```typescript
type savingRoll = (character: CharacterSheet, stat: Stats) => boolean
```

And we are going to have consistency between `character` and `stats`.

#### How to use an interface?

Now you can create any *character sheet* and assure integrity. You can use it as any basic type, for example:

* Create a variable

```typescript
import { human } from './races';
import { mage } from './classes';

const Raistlin: CharacterSheet = {
  name: 'Raistlin Majere',
  level: 30,
  race: human,
  dndClass: mage,
  stats: {
    strength: 10,
    dexterity: 16,
    constitution: 8,
    inteligence: 30,
  	wisdow: 16,
    charisma: 17,
    'hit-points': 76,
  },
  skills: [],
}
```

* Create a class implementing the interface

```javascript
class Raistlin implements CharacterSheet {
  name: 'Raistling Majere';
  level: 30;
	...
}
```



### Functions



#### Destructuring, arguments, etc

#### Overloading?



### Enum 

```typescript
type FlattenIfArray<T> = T extends (infer P)[] ? P : never;
type EnumOf<T extends object> = T[keyof T];

function Enum<T extends string[]>(...args: T) {
  return Object.freeze(args.reduce((acc, next) => {
    return {
      ...acc,
      [next]: next,
    };
  }, Object.create(null)) as { [P in FlattenIfArray<typeof args>]: P });
}

const Stats = Enum('strength', 'dexterity', 'constitution', 'inteligence', 'wisdow', 'charisma', 'hit-points');
type Stats = EnumOf<typeof Stats>;

```

This implementation is based on [rex-tils](https://github.com/Hotell/rex-tils) npm package.



### Advance types



```typescript
type Pick;
type Diff;

// Generic Types
<>
  
// Inference
  
```



