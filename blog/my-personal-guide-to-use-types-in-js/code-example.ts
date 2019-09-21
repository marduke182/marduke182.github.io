type FlattenIfArray<T> = T extends (infer P)[] ? P : never;
type EnumOf<T extends object> = T[keyof T];
type Tuple<T, V> = [T, V];

function Enum<T extends string[]>(...args: T): { [P in FlattenIfArray<typeof args>]: P } {
  return Object.freeze(args.reduce((acc, next) => {
    return {
      ...acc,
      [next]: next,
    };
  }, Object.create(null)));
}

const Stats = Enum('strength', 'dexterity', 'constitution', 'inteligence', 'wisdow', 'charisma', 'hit-points');
type Stats = EnumOf<typeof Stats>;


type CharacterStats = { [key in Stats]: number };

interface CharacterRace {}

interface CharacterClass {}

interface Skill {}

interface CharacterSheet {
  readonly name: string;
  level: number;
  race: CharacterRace;
  dndClass: CharacterClass;
  stats: CharacterStats;
  skills: Skill[];
}



const aNumber: number = 1;
const aString: string = 'Hello';
const anArray: [] = []; // Bad, We should use non typed arrays
const aTypedArray: string[] = ['Hello', 'World']; // Good
const anObject: object = {}; // Bad, we should use interfaces or dynamic object instead

type Hello = 'Hello';
const aCastedString = aString as Hello;

type Diff<T, U> = T extends U ? never : T;  // Remove types from T that are assignable to U
type Filter<T, U> = T extends U ? T : never;  // Remove types from T that are not assignable to U

type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; 

type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T20 = Boxed<string>;  // BoxedValue<string>;
type T21 = Boxed<[string, number]>;  // BoxedArray<number>;
type T22 = Boxed<string | number[]>;


type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;  // "updatePart"
type T41 = NonFunctionPropertyNames<Part>;  // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part>;  // { updatePart(newName: string): void }
type T43 = NonFunctionProperties<Part>;  // { id: number, name: string, subparts: Part[] }


/**
 * Extracts function arguments
 */
export type ExtractFunctionArguments < Fn > = Fn extends  ( ...args: infer P ) => any  ? P : never

/**
 * Extracts function return values
 */
export type ExtractFunctionReturnValue<Fn> = Fn extends  ( ...args: any[] ) => infer P  ? P : never

type BooleanSwitch<Test, T = true, F = false> = Test extends true ? T : F

/**
 * Replacement for Function, represents any kind of function. 
 */
export type AnyFunction = ( ...args: any[] ) => any

/**
 * Represents any function with an arity of 1.
 */
export type AnyFunction1 = ( a: any ) => any

// This is used as an arbitrary literal that should not match anything else.
type Arbitrary = 'It is now 1554792354 seconds since since Jan 01, 1970'

// An type to test if a type is `any` within a specific context
type IsAny<O, T = true, F = false> = Arbitrary extends O
  ? any extends O
    ? T
    : F
  : F

/**
 * A powerful recursive type function composition using `pipe`.
 */
export type Pipe<Fns extends any[], IsPipe = true, PreviousFunction = void, InitalParams extends any[] = any[], ReturnType = any> = {
  'next': ( ( ..._: Fns ) => any ) extends ( ( _: infer First, ..._1: infer Next ) => any )
    ? PreviousFunction extends void
        ? Pipe<Next, IsPipe, First, ExtractFunctionArguments<First>, ExtractFunctionReturnValue<First> >
        : ReturnType extends ExtractFunctionArguments<First>[0]
          ? Pipe<Next, IsPipe, First, InitalParams, ExtractFunctionReturnValue<First> >
          : IsAny<ReturnType> extends true
            ? Pipe<Next, IsPipe, First, InitalParams, ExtractFunctionReturnValue<First> >
            : {
              ERROR: ['Return type ', ReturnType , 'does comply with the input of', ExtractFunctionArguments<First>[0]],
              POSITION: ['Position of problem for input arguments is at', Fns['length'], 'from the', BooleanSwitch<IsPipe, 'end', 'beginning'> , 'and the output of function to the ', BooleanSwitch<IsPipe, 'left', 'right'>],
            }
    : never
  'done': ( ...args: InitalParams ) => ReturnType,
}[
  Fns extends []
    ? 'done'
    : 'next'
]

/**
 * An example of `Pipe` used in a `pipe` function
 */
export type PipeFn = <Fns extends [AnyFunction, ...AnyFunction1[]] >( ...fns: Fns & Pipe<Fns> extends AnyFunction ? Fns : never ) =>  Pipe<Fns>



export type Reverse<Tuple extends any[], Prefix extends any[] = []> = {
  empty: Prefix,
  nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Next) => any)
    ? Reverse<Next, Prepend<Prefix, First>>
    : never
}[
  Tuple extends [any, ...any[]]
    ? 'nonEmpty'
    : 'empty'
]

export type Compose<Fns extends any[]> = Pipe<Reverse<Fns>, false>
export type ComposeFn = <Fns extends [AnyFunction, ...AnyFunction[]] >( 
  ...fns: Fns & 
    Compose<Fns> extends AnyFunction 
      ? Fns 
      : never 
) =>  Compose<Fns>




export const pipe: PipeFn = ( entry: AnyFunction, ...funcs: AnyFunction1[] ): any =>  ( 
  ( ...arg: unknown[] ) => funcs.reduce( 
    ( acc, item ) => item.call( item, acc ), entry( ...arg ) 
  ) 
); 
const init = <A>( xs: A[]): A[] => xs.slice(0,-1)
const last = <A>( xs: A[]): A => xs.slice(-1)[0]

export const compose: ComposeFn = ( first: AnyFunction1, ...funcs:  AnyFunction[] ): any => {
  /* `any` is used as return type because on compile error we present an object, 
      which will not match this */
  return ( ...arg: unknown[] ) => init( [first, ...funcs] ).reduceRight( 
    (acc, item) => item.call( item, acc ), last(funcs)( ...arg ) 
  )
}


const a = (a: string) => Number.parseInt(a);
const b = (h: number) => h;
const c = (j: number) => {};

const tmp = pipe(
  a,
  b,
  b,
  b,
  b,
  b,
  b,
  b,
)

const tmp2 = compose(
  b,
  a,
)