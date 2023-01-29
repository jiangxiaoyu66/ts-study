export {}

// source：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

/* 01. type
  类型别名，可以为任何类型提供名称，包括基本类型和对象类型
*/
// type给基本类型提供别名
type PossibleSource = 'juejin' | 'zhihu' | 'segmentfault';
const source1: PossibleSource = 'zhihu'
const source2: PossibleSource = 'zhihu2'

// type给对象类型提供别名
type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) { // 打印坐标
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
/* 注：
  type的作用是什么，为什么会出现？
  为了避免重复声明同一个类型
 */





/* 02. interface
  接口声明是命名对象类型的另一种方式，他只能用来声明对象，不可以声明基本数据类型
  类型别名和接口非常相似，在许多情况下，您可以在它们之间自由选择。
  接口的几乎所有特性都是类型可用的，关键区别在于不能重新打开类型以添加新的属性，而接口总是可扩展的。
  
 */
interface Animal {
  type: string // 动物种类
  weight?: number
}

// 从报错中可以看出interface的声明不分顺序，会最终合并为一个
let animal:Animal = { // ts报错：类型 "{ type: string; }" 中缺少属性 "male"，但类型 "Animal" 中需要该属性。
  type : 'cat'
}

interface Animal {
  male: boolean // 是否为男性
}

animal.male = false
animal.type = 'dog'
animal.height = '100cm'











/* 03. 区分interface和type
  interface只能用作声明 对象类型
  类型别名和接口非常相似，在许多情况下，您可以在它们之间自由选择。接口的几乎所有特性都是类型可用的，关键区别在于不能重新打开类型以添加新的属性，而接口总是可扩展的。 
  source：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
*/

interface Animal {
  type: string // 动物种类
}

let animal:Animal = { // ts报错：类型 "{ type: string; }" 中缺少属性 "male"，但类型 "Animal" 中需要该属性。
  type : 'cat'
}

interface Animal {
  male: boolean // 是否为男性
}

animal.male = false
animal.type = 'dog'
animal.height = '100cm'



// /**创建后无法对类型做修改 */
// type Animal2= {
//   type: string // 动物种类
// }

// // let animal:Animal

// type Animal2= {
//   male: boolean // 是否为男性
// }

// // animal.male = false
