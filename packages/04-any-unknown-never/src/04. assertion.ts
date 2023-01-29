/* 类型断言：
  进行类别的修改，基本语法是 as NewType。
*/

const str: string = 'linbudu';

/* 应用场景1: 你可以将 any / unknown 类型断言到一个具体的类型： */
let unknownVar: unknown;
(unknownVar as { foo: () => {} }).foo();

/* 应用场景2: 也可以 as 到 any 来为所欲为，跳过所有的类型检查： */
(str as any).func().foo().prop;

/* 应用场景3: 也可以在联合类型中断言一个具体的分支： */
function fooFun(union: string | number) {
  if ((union as string).includes('linbudu')) {
  }

  if ((union as number).toFixed() === '599') {
  }
}


/* 但是类型断言的正确使用方式是，在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型：
 */

// 这里从 {} 字面量类型断言为了 IFoo 类型，即为解构赋值默认值进行了预期的类型断言。
// 当然，更严谨的方式应该是定义为 Partial<IFoo> 类型，即 IFoo 的属性均为可选的。
interface IFoo {
  name: string;
}

declare const obj: {
  foo: IFoo;
};

const { foo = {} as IFoo } = obj;

export {};




/* 注意：
  除了使用 as 语法以外，你也可以使用 <> 语法。它虽然书写更简洁，但效果一致，只是在 TSX 中尖括号断言并不能很好地被分析出来。
  你也可以通过 TypeScript ESLint 提供的 consistent-type-assertions 规则来约束断言风格。
  需要注意的是，类型断言应当是在迫不得己的情况下使用的。
  虽然说我们可以用类型断言纠正不正确的类型分析，但类型分析在大部分场景下还是可以智能地满足我们需求的。
  总的来说，在实际场景中，还是 as any 这一种操作更多。但这也是让你的代码编程 AnyScript 的罪魁祸首之一，请务必小心使用。
*/