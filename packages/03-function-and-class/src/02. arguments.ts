/* 函数的可选参数类型声明 */
function foo(name: string, age?: number): number {
  const inputAge = age || 18;
  return name.length + inputAge;
}

function foo1(name: string, age: number = 18): number {
  const inputAge:number = age;
  return name.length + inputAge;
}



/* 函数的rest参数 */

function foo3(arg1: string, ...rest: any[]) {}

function foo4(arg1: string, ...rest: [number, boolean]) {}

foo4('linbudu', 18, true);
foo4('linbudu', 18, true, 100);

export {};
