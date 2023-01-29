

/* 01. unknown表示未知类型
*/

/* 
  02. unknown 类型的变量可以被任意类型赋值
  但只能赋值给 any 与 unknown 类型的变量 
*/
let unknownVar: unknown = 'linbudu';

unknownVar = false;
unknownVar = 'linbudu';
unknownVar = {
  site: 'juejin',
};

unknownVar = () => {};

const val1: string = unknownVar; // Error：不能将类型“unknown”分配给类型“string”
const val2: number = unknownVar; // Error
const val3: () => {} = unknownVar; // Error
const val4: {} = unknownVar; // Error

const val5: any = unknownVar;
const val6: unknown = unknownVar;


/**
 * 02. any和unknown的区别：
 *     any 放弃了所有的类型检查，而 unknown 并没有
 *      这一点也体现在对 unknown 类型的变量进行属性访问的时候
 */
let anyVar: any
anyVar.foo()
unknownVar.foo(); // 报错：对象类型为 unknown


/* 03. 要对 unknown 类型进行属性访问，需要进行类型断言（别急，马上就讲类型断言！），
    即“虽然这是一个未知的类型，但我跟你保证它在这里就是这个类型！”
    (断言相关知识点，看： )
*/

(unknownVar as { foo: () => {} }).foo();




/* 注意： 在类型未知的情况下，更推荐使用 unknown 标注。
这相当于你使用额外的心智负担保证了类型在各处的结构，后续重构为具体类型时也可以获得最初始的类型信息，同时还保证了类型检查的存在。 */