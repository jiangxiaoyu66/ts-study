function func1() {}
function func2() {
  return;
}
function func3() {
  return undefined;
}

const voidVar1: void = undefined;
const voidVar2: void = null;





/**
 * never表示从不返回任何信息，从不触及。一般在报错或者死循环的时候使用
 */

/* 
  const foo = function() { // 
  }
  const value = foo()
  console.log(value)  // undefined
  // 等同于 
  const foo = function() {
    return undefined;
  }
  const value = foo()
  console.log(value)  // undefined
 */


// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}










// 在 TypeScript 中，一个没有返回值（即没有调用 return 语句）的函数，其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined。

// 没有调用 return 语句
function foo1(): void { }

// 调用了 return 语句，但没有返回值
function bar1(): void {
  return;
}
// 原因和我们在原始类型与对象类型一节中讲到的：在 TypeScript 中，undefined 类型是一个实际的、有意义的类型值，而 void 才代表着空的、没有意义的类型值。 相比之下，void 类型就像是 JavaScript 中的 null 一样。因此在我们没有实际返回值时，使用 void 类型能更好地说明这个函数没有进行返回操作。但在上面的第二个例子中，其实更好的方式是使用 undefined ：

function bar2(): undefined {
  return;
}
