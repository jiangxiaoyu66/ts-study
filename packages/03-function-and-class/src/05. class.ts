// class的主要结构即构造函数，属性，方法和访问符

/* 01. class类型标注的普通用法
 */

class Foo {
  prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get propA(): string {
    return `${this.prop}+A`;
  }

  set propA(value: string) {  // setter 方法不允许进行返回值的类型标注。
    this.propA = `${value}+A`;
    return 'da' // Setter 不能返回值。
  }
}

const _Foo = class {
  prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  // ...
};


/* 02. class类型标注————修饰符
  TS中可以为Class成员添加4个修饰符：public, private, protected, readonly
  public：此类成员在类、类的实例、子类中都能被访问。class成员默认都是public类型
  private：private声明的成员只能在类的内部被使用。
  protected：此类成员仅能在类与子类中被访问，你可以将类和类的实例当成两种概念，即一旦实例化完毕（出厂零件），那就和类（工厂）没关系了，即不允许再访问受保护的成员。
 */
class MofifiedFoo {
  private prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);  // 类可以在自己内部调用自己的private成员
  }

  public get propA(): string {
    return `${this.prop}+A`;
  }

  public set propA(value: string) {
    this.propA = `${value}+A`;
  }
}

const mofifiedFoo = new MofifiedFoo('我爱我家')
class mofifiedFooChild extends MofifiedFoo {

}
// static成员不能在类外被访问，只能在类的内部被访问到
MofifiedFoo.prop 

// protected成员只能在类内部和子类内部被访问
mofifiedFoo.print
MofifiedFoo.print 
mofifiedFoo.print 
mofifiedFooChild.print


MofifiedFoo.prop



// 构造函数传参
class Foo2 {
  constructor(public arg1: string, private arg2: boolean) {

  }
}

new Foo2('linbudu', true);

