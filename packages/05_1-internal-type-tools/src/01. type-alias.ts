/* 01. 类型别名基本使用:可以对不同种类的类型进行搭配重组 */
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 502;

type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => {};
const moveHandler: Handler = (e) => {};
const dragHandler: Handler = (e) => {};

type ObjType = {
  name: string;
  age: number;
};



/* 02. 类型别名支持泛型,我们叫这种方式叫做工具类型. 这样组合出来的新类型更加的灵活 */
type Factory<T> = T | number | string;
const foo1: Factory<boolean> = true;

type FactoryWithBool = Factory<boolean>;  // 通常不会直接使用工具类型来做类型标注，而是再度声明一个新的类型别名
const foo2: FactoryWithBool = true;

/* 泛型参数的名称（上面的 T ）也不是固定的。通常我们使用大写的 T / K / U / V / M / O ...这种形式。
如果为了可读性考虑，我们也可以写成大驼峰形式（即在驼峰命名的基础上，首字母也大写）的名称，比如: */
type _Factory<NewType> = NewType | number | string;

type MaybeNull<T> = T | null;

function process(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler();
}

type MaybeArray<T> = T | T[];

// 函数泛型我们会在后面了解~
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

export {};
