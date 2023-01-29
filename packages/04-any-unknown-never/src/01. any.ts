export {}
/* any
  表示任意类型
*/

/**
 * any存在的意义
 * 有些时候，我们的 TS 代码并不需要十分精确严格的类型标注。
 * 比如 console.log 方法就能够接受任意类型的参数，不管你是数组、字符串、对象或是其他的，统统来者不拒。
 * 那么，我们难道要把所有类型用联合类型串起来？
  这当然不现实，为了能够表示“任意类型”，TypeScript 中提供了一个内置类型 any ，来表示所谓的任意类型。
  此时我们就可以使用 any 作为参数的类型：
  log(message?: any, ...optionalParams: any[]): void
 */




// any
let foo;

// foo、bar 均为 any（在noImplicitAny为true时会报错）
// function func(foo, bar){}

/* 
  01. any可以兼容所有类型
*/
let anyVar: any = 'linbudu';

anyVar = false;
anyVar = 'linbudu';
anyVar = {
  site: 'juejin',
};

anyVar = () => {};

/* 
  02. any可以被所有类型兼容
*/
const val1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;

anyVar?.foo?.bar?.baz();  
anyVar[0][1][2].prop1; // 执行代码会报错



/* 03. 尽量避免使用anyScript 
  any 类型的万能性也导致我们经常滥用它，比如类型不兼容了就 any 一下，类型不想写了也 any 一下，不确定可能会是啥类型还是 any 一下。
  此时的 TypeScript 就变成了令人诟病的 AnyScript。
  为了避免这一情况，我们要记住以下使用小 tips ：

  - 如果是类型不兼容报错导致你使用 any，考虑用类型断言替代，我们下面就会开始介绍类型断言的作用。
  - 如果是类型太复杂导致你不想全部声明而使用 any，考虑将这一处的类型去断言为你需要的最简类型。
    如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
  - 如果你是想表达一个未知类型，更合理的方式是使用 unknown。(转到 ./02. unknown.ts 学习)

  

*/