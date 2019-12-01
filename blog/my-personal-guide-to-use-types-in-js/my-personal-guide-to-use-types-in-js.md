---
title: "A journey into typed JavaScript"
category: "Technology"
date: "2018-07-17"
tags: ['types', 'js', 'javascript', 'typescript']
---

Let's start from the beginning, it was 2015, I was an Angular Developer at the time, it was the glorious era of `directives`, `services`, `factories` and `controllers`. Angular 2 was becoming  a thing, and the core team started showing this new language,  **WTF??**  a new language?, who is going to used that?.  That was my first time I heard about **Typescript** and my first time where I fully embrace **React** :D.

At the moment, I really didn't understand the need of types, Javascript is pretty cool you have the flexibility to do whatever you want, whenever you want. To the contrary, of languages like **Java** where you have to write 500 lines of code to print *Hello World*. After been a Java developer for 3 years, I didn't want to happen the same for **JavaScript**.



## 5 years later

I have to admit, I was blind for my emotions, after 3 years I started understanding why types are important, mostly for bigger teams. Nevertheless, I have never had the opportunity to use it in my previous jobs or personal projects. Now, I cannot live without them. For me is a **must** to started any new project with it.



### Why?

Is pretty simple, some of the benefits are:

* Intellisense, if you comes from *typed* languages like *Java* you might know this amazing feature where you code just pressing the space bar, with typescript you can do pretty much the same.
* Documentation, as you type your code you are adding metadata that your IDE will use as a documentation, so no more *"this var is a string or is a number? maybe can me undefined?"*
* Refactoring, when you have big code bases it makes harder to find all the dependencies every time you want to move a file, or only change the name of a *exported* function.
* Transpilation, we already transpile our code base (and this is not going to change in the near future). Hence, if we already are going to add in our pipeline babel, it's not to expensive to add *@babel/preset-typescript*
* Libraries, are the ones that get more benefits from this. Free documentation, type definition file generation, etc. Thus, I highly recommend to use it if you are planing to share some code :smirk:

> Keep in mind that if you just want to do something very small and simple typescript might not be what you need, and that it's perfect. Old, plain JavaScript will always be there :muscle:.

In conclusion, after using typescript for almost  1 year now, I highly recommend you to try it if you havent.



## Getting Started

As any other build tool to start using it is required to add a configuration file, aka `tsconfig.json`, let's see a small example:



```json
// Basic tsconfig example
{
  "include": ["./src/**/*"], // The files that will compile
  "exclude": ["src/**/__tests__/*"], // Exclude your tests
  "files": ["./some-lib-definition-file.d.ts"], // Usefull to import non existent types for libs
  "compilerOptions": {
    "module": "commonjs", // We are going to use commonjs modules
    "target": "es5", // We are going to use the latest javascript, we might change this for final buil, dont break the web 
    "lib": ["dom", "es2015", "es2017"], // We add predefined libraries based on what are we using (this will add types for dom elements and all latest features in javascript)
  }
}

```

Once you have this configuration in your project, you should install `typescript` package as a dev dependency `npm i -D typescript` or `yarn add --dev typescript` will do the job. Now you should be able to build your project:

```json
// package.json
{
  "scripts": {
    "build": "yarn run build:cjs && yarn run build:esm",
    "build:cjs": "tsc --project ./tsconfig.json --outDir ./dist/cjs --module commonjs",
    "build:esm": "tsc --project ./tsconfig.json --outDir ./dist/esm --module esnext",
    "typecheck": "tsc --noEmit --project ./tsconfig.typecheck.json" // You might want to have a custom to includes another files.
  }
}
```

That is, it's pretty simple.

### Integrations

Now let's talk about integrations, one thing is to build your package if you are a library, but most of the time you are going to use your current code with existing tools like `webpack`, `storybook`, `jest`, etc. Or you might want to compile using your current babel configuration, that's also possible.



#### Webpack

For webpack there are a couple of solutions, but the one I use is `awesome-typescript-loader`,  you just need to add the loader and the resolve extensions:

```javascript
// webpack.config.js
modules.exports = {
  //...,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader'),
      },
    ]
  },
  //...,
  resolve: {
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }
  //...,
}
```

This also work for Storybook:

```javascript
//./storybook/webpack.config.js
module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
```



#### Jest

For jest we are going to use `ts-jest`, it comes with predefined presets:

```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false, 	// We dont want to check types on our tests
    },
  },
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
};
```



#### Babel

As an alternative you can transpile your typescript files using babel, the benefits of doing this is that you take advantage of your current pipeline to process the files. However, your are going to miss build types validation, and  it doesnt support fancy stuff like `const enumns` or `namespace`, also is going to ignore most of your `tsconfig.json` file. To use it with babel you just have to add `@babel/preset-typescript` in your config:

```
{  
	"presets": ["@babel/preset-typescript"] 
} 
```



### Protips

Now, I will share few tips that I would like to know before start with typescript:



#### 1. Custom file for shared types

It might sound smart to have the type definition in the same file as the implementation, it bring you a lot of flexibility to change the definition everytime you want to change the code, actually, that works perfect for **React** props. 

Despite of that, we need to be aware about what types are used for other components to reduce internal dependencies, remember that typescript will remove all the types from the modules, thus, all the extra code will be there, causing an internal dependency to an external module just for importing a type. For example:

```typescript
// User.tsx
interface Props {
  id: string,
}

export interface User {} // Bad

export const useUser = (id: string): User => {/*fancy hook to retrieve the user*/}
export const User: FunctionComponent<Props> = ({id}) => {
	const user = useUser(id);
  return //someting
}

// a file that use the user to do something
import ( User) from './User'; // Is importing the type definition, but it has to load the whole User (including react + component code)

export const getUsername = (user: User) => `${user.name} ${user.last_name}`
```

In the above case, if we want to test only the `getUsername` function, *Jest* will have to load React and the User component even if we are not going to used it. Noticed that is a small case, now imagine a big monorepo where the package `Y` import `User` from this package, the build/jest times are going to goes up, even could affect bundle size of the application if *tree-shaking* is not well configured.

My recommendation just create a `types.ts` file with just the shared type of a component, the above example can be rewrite as:

```typescript
//./user/types.tsx
export interface User {} // Good

// ./user/User.tsx
interface Props {
  id: string,
}

export const useUser = (id: string): User => {/*fancy hook to retrieve the user*/}
export const User: FunctionComponent<Props> = ({id}) => {
	const user = useUser(id);
  return //someting
}

// ./user/utils.tsx
import ( User) from './types'; // just import all the types, no source code
export const getUsername = (user: User) => `${user.name} ${user.last_name}`
```



#### 2. Interface over class definition

By default typescript will create a new type every time you do a new class, this works properly most of the time, but as in the previous case when you need to share the type and not the code this start to become a problem, let's see a small example:



```typescript
// dnd-provider.ts
export class DnDProvider {
	findRace(id: string): Race {/*some code*/},
  findMonster(id: string): Monster {/*some code*/}
	/*some code*/
}

// app.ts
import { DndProvider } from './dnd-provider.ts'

interface Props {
  dndProvider?: DndProvider, 
}

export const App: FunctionCompomnet<Props> = ({ dndProvider}) => {/*Do something */}
```

As you can noticed, we are loading a whole class implementation just to type our component and the worst part is, that it's an optional prop, so we might no need it in our app :man_facepalming:. Now lets a look to this:

```typescript
// types.ts
interface RpgProvider {
  findRace(id: string): Race,
  findMonster(id: string): Monster,
  {/*others methods*/}
}

// dnd-provider.ts
export class DnDProvider implements RpgProvider {
  {/*implementation*/}
}

// pathfinder-provider.ts
export class PathfinderProvider implements RpgProvider {
  {/*implementation*/}
}

// app.ts
import { RpgProvider } from './types.ts'

interface Props {
  rpgProvider?: RpgProvider, 
}

export const App: FunctionCompomnet<Props> = ({ rpgProvider}) => {/*Do something */}

```

We are combining the solution on point one together with `interface` and `implements`, we created a new generic interface on his own file to allow reusability without extra source code, and we are using it in two different providers. At the beginning, `implements` would be confusing, it works pretty different to other languages, you will have to type each function by yourself :cry:, *inference* doesn't work.



#### 3. Inference using generic

One of the most amazing features of typescript is called type inference, this is done at any moment for every piece of code you create, that's how typescript can work with old Javascript. In addition, we can do really complex inference, for example:

```typescript
interface Providers {
  aProvider: AProvider,
  bProvider: BProvider,
  cProvider: CProvider,
  [key: string]: any,
}

const useProvider = <P extends string>(id: P): Providers[P] => {
  return {} as Providers[P]
}

const aProvider = useProvider('aProvider'); // type is AProvider
const cProvider = useProvider('cProvider'); // type is CProvider
const aProvider = useProvider('aProvider'); // type is any
```

This is one of the way to apply the inference, as you can see, we are using the generic type to extract the type from a `Providers` interface, the potential of this is big, now we can write generic functions and just using a string we are going to get the correct type :open_mouth:. This is not the only example, lets try something more advance, Have you heard of react HOC? I know they are not recommended now, but let's try to type a custom **HOC**:

```typescript
// our hook
export const withTheme = <Props extends { theme: Theme }>(
  WrappedComponent: ComponentType<Props>,
) => {
  const WithTheme: FunctionComponent<Omit<Props, 'theme'>> = props => {
    const theme = useTheme();
    return <WrappedComponent theme={theme} {...(props as Props)} />;
  };
  return WithTheme;
};

// our component
interface ButtonProps {
  name: string;
  value: string;
  theme: Theme;
  {..etc}
}
const Button: FunctionComponent<Props> = ({ theme, ...props }) => {
  return <button />;
};
const ThemedButton = withTheme(Button); // The type is FunctionComponent<Pick<ButtonProps, 'name' | 'value'>>

```

Oh cool, the final component has all the props from button except the `theme`, even if I never specified the original props when I called `withTheme`, and this can be extended even more. Let's talked about that in another section.



#### 4. Extracting values from custom types

When you started using *generics*, you start facing another big issue, how to get values from them? React. for example offers a set of helper to extract *Props* from an component with only the type. You might want to implement this in your own types. Let's create a simple interface:

```typescript

// types.ts
interface User<Attributes extends {}> {
  name: string,
  last_name: string,
  attributes: Attributes,
}

type UserAttributes<T> = T extends User<infer A> ? A : never;

// utils.ts
function getUserAttributes<U extends User<any>>(user: U): UserAttributes<U> {
  return user.attributes;
}
```

In line 4, we created an alias using the `type` syntax, lets explain what is doing:

1. Created an alias named `UserAttributes`
2. Add a generic value `<T>`, it will be required and could be any type.
3. We checked if the generic `T` value extends `User`
   1. We used special `<infer A>` syntax to *infer* the `Attribute` of the current type.
4. If is true, we returned the *infered* type `A`.
5. if is false, we returned `never`.

In conclusion, with this small alias we can extract the attributes of any new `User` before hand. This is an small example, but you can imagine the potential we have in the big picture :tada:.

#### 5. Use mapped types 

#### 6. Recursive types (Advance)







