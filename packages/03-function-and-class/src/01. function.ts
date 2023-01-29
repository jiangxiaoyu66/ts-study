// 函数的主要结构即参数、逻辑和返回值，所以类型标注主要针对参数和返回值


/* 01. 普通函数中的类型声明 */
function foo(name: string): number {
  return name.length;
}

const foo1 = function (name: string): number {
  return name.length;
};

/* 02. 箭头函数中的类型声明 */
const foo2: (name: string) => number = function (name) {
  return name.length;
};

const foo3: (name: string) => number = (name) => {
  return name.length;
};
// const foo3:( (name: string) => number) = (name) => {
//   return name.length;
// };

const foo4 = (name: string): number => {
  return name.length;
};



type FuncFoo = (name: string) => number;

const foo5: FuncFoo = (name) => {
  return name.length;
};

interface FuncFooStruct {
  (name: string): number;
}


export {}


