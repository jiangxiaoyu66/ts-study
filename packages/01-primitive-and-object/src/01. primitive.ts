/* 基本类型的类型声明 */
const name: string = 'linbudu';
const age: number = 24;
const male: boolean = false;
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');

const undef: undefined = undefined;
const nul: null = null;



const obj: object = { name, age, male };
const tmp1: null = null;
const tmp2: undefined = undefined;


/*
  tsconfig.json配置文档说明：
  https://www.tslang.cn/docs/handbook/compiler-options.html


  在严格的 null检查模式下， 
  null和 undefined值不包含在任何类型里，只允许用它们自己和any来赋值（有个例外， undefined可以赋值到 void）
  默认情况下null和undefined是所有类型的子类型，所以任何类型的值在strictNullChecks为false的时候都可以被赋值undefined和null
  但当strictNullChecks为true的时候，只允许把null赋值给自己。strictNullChecks为true时
 */
// 以下两个仅在关闭 strictNullChecks 时成立
const tmp3: string = null;
const tmp4: string = undefined;



// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
  console.log("This is my warning message");
}

/* 
  我们一般不用void来声明变量，因为你只能给他赋予undefined或者null
  （且null只能在strictNullChecks配置为false的时候赋值给void类型，否则ts检查就报错）
 */

const voidVar2: void = null; // 需要关闭 strictNullChecks

export {}  // 块级作用域，防止变量重复




