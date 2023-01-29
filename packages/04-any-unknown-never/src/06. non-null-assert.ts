/* 非空断言

*/

declare const foo: {
  func?: () => {
    prop?: number | null;
  };
};
// 直接使用报错
foo.func().prop.toFixed();

/* 用类型断言处理，比较复杂： 
不简化就要写成这样，用断言告诉他该属性是存在的 */
(
  (
    foo.func as () => {
      prop?: number;
    }
  )().prop as number
).toFixed();


/* 简化写法，非空断言 */
foo.func!().prop!.toFixed();

foo.func?.().prop?.toFixed();


/* 其他场景使用非空断言: 获取dom不可为空, 找到元素不可为空 */
const element = document.querySelector('#id')!;
const target = [1, 2, 3, 599].find((item) => item === 77)!;  // 这边遇到找不到的情况不会报错吗,他不是加了非空断言吗?.有疑问.
console.log(target);


export {};

/* 
怎么样，非空断言是不是简单多了？
你可以通过 non-nullable-type-assertion-style 规则来检查代码中是否存在类型断言能够被简写为非空断言的情况。
*/
