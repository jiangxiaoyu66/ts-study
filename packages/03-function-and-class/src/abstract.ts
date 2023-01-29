/* 抽象类
  抽象类是对类的方法和结构的一种抽象，用来描述类的结构。和我们之前涉及到的interface很相似

*/


abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

abstract class AbsFoo2 {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class Foo extends AbsFoo, AbsFoo2 {
  absProp: string = 'linbudu';

  get absGetter() {
    return 'linbudu';
  }

  absMethod(name: string) {
    return name;
  }
}


interface FooStruct {
  absProp: string;
  get absGetter(): string;
  absMethod(input: string): string;
}

interface FooStruct2 {
  absProp: string;
  get absGetter(): string;
  absMethod(input: string): string;
}

class Foo1 implements FooStruct, FooStruct2 {
  absProp: string = 'linbudu';

  get absGetter() {
    return 'linbudu';
  }

  absMethod(name: string) {
    return name;
  }
}

export {};



