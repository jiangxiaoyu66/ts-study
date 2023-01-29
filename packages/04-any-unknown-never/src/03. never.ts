/* 
 never 才是一个“什么都没有”的类型，它甚至不包括空的类型，
 严格来说，never 类型不携带任何的类型信息，因此会在联合类型中被直接移除，比如我们看 void 和 never 的类型兼容性： */
/* 
在编程语言的类型系统中，never 类型被称为 Bottom Type，是整个类型系统层级中最底层的类型。
和 null、undefined 一样，它是所有类型的子类型，但只有 never 类型的变量能够赋值给另一个 never 类型变量。
*/

type UnionWithNever = 'linbudu' | 599 | true | void | never;



function justThrow(): never {
  throw new Error();
}

function foo(input: number) {
  if (input > 1) {
    justThrow();
    // 等同于 return 语句后的代码，即 Dead Code
    const name = 'linbudu';
  }
}

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === 'string') {
  strOrNumOrBool.charAt(1);
} else if (typeof strOrNumOrBool === 'number') {
  strOrNumOrBool.toFixed();
} else if (typeof strOrNumOrBool === 'boolean') {
  strOrNumOrBool === true;
} else {
  const _exhaustiveCheck: never = strOrNumOrBool;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}
