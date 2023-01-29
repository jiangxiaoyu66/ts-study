
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

/* 01. 函数重载
    function func(foo: number, bar: true): string，重载签名一，传入 bar 的值为 true 时，函数返回值为 string 类型。
    function func(foo: number, bar?: false): number，重载签名二，不传入 bar，或传入 bar 的值为 false 时，函数返回值为 number 类型。
    function func(foo: number, bar?: boolean): string | number，函数的实现签名，会包含重载签名的所有可能情况。
    基于重载签名，我们就实现了将入参类型和返回值类型的可能情况进行关联，获得了更精确的类型标注能力。
*/

/* 这里我们的三个 function func 其实具有不同的意义：
    function func(foo: number, bar: true): string，重载签名一，传入 bar 的值为 true 时，函数返回值为 string 类型。
    function func(foo: number, bar?: false): number，重载签名二，不传入 bar，或传入 bar 的值为 false 时，函数返回值为 number 类型。
    function func(foo: number, bar?: boolean): string | number，函数的实现签名，会包含重载签名的所有可能情况。
    基于重载签名，我们就实现了将入参类型和返回值类型的可能情况进行关联，获得了更精确的类型标注能力。
*/
function func1(foo: number, bar?: true): string;
function func1(foo: number, bar?: false): number;
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func1(599); // number
const res2 = func1(599, true); // string
const res3 = func1(599, false); // number

console.log(res1, res2, res3);
console.log(typeof(res1), typeof(res2), typeof(res3));


/* 
  实际上，TypeScript 中的重载更像是伪重载，它只有一个具体实现，其重载体现在方法调用的签名上而非具体实现上。
  而在如 C++ 等语言中，重载体现在多个名称一致但入参不同的函数实现上，这才是更广义上的函数重载。

  个人觉得TS中的函数重载意义不大，写不写重载签名都一样
*/