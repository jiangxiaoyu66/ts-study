/*interface,用来描述对象属性的类 */

/** 01. interface的基本用法 */
interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'linbudu',
  age: 599,
  male: true,
};

/** 02. interface声明可选属性 */
interface IDescription2 {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription2 = {
  name: 'linbudu',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};

obj2.male = false;
obj2.func = () => {};

// 注：即使你对可选属性进行了赋值，TypeScript 仍然会使用接口的描述为准进行类型检查，你可以使用类型断言、非空断言或可选链解决（别急，我们在后面会讲到）。



/** 03. interface声明只读属性 */

interface IDescription3 {
  readonly name: string;
  age: number;
}

const obj3: IDescription3 = {
  name: 'linbudu',
  age: 599,
};

// 无法分配到 "name" ，因为它是只读属性
obj3.name = '林不渡';
