### object、Object 以及 {}

`object`、`Object` 以及`{}`（一个空对象）这三者的使用可能也会让部分同学感到困惑，所以我也专门解释下。

首先是 Object 的使用。被 JavaScript 原型链折磨过的同学应该记得，原型链的顶端是 Object 以及 Function，这也就意味着所有的原始类型与对象类型最终都指向 Object，在 TypeScript 中就表现为 Object 包含了所有的类型：

```typescript
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = 'linbudu';
const tmp5: Object = 599;
const tmp6: Object = { name: 'linbudu' };
const tmp7: Object = () => {};
const tmp8: Object = [];
```

和 Object 类似的还有 Boolean、Number、String、Symbol，这几个**装箱类型（Boxed Types）** 同样包含了一些超出预期的类型。以 String 为例，它同样包括 undefined、null、void，以及代表的 **拆箱类型（Unboxed Types）** string，但并不包括其他装箱类型对应的拆箱类型，如 boolean 与 基本对象类型，我们看以下的代码：

```typescript
const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = 'linbudu';

// 以下不成立，因为不是字符串类型的拆箱类型
const tmp13: String = 599; // X
const tmp14: String = { name: 'linbudu' }; // X
const tmp15: String = () => {}; // X
const tmp16: String = []; // X
```

**在任何情况下，你都不应该使用这些装箱类型。**

object 的引入就是为了解决对 Object 类型的错误使用，它代表**所有非原始类型的类型，即数组、对象与函数类型这些**：

```typescript
const tmp17: object = undefined;
const tmp18: object = null;
const tmp19: object = void 0;

const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
const tmp21: object = 599; // X 不成立，值为原始类型

const tmp22: object = { name: 'linbudu' };
const tmp23: object = () => {};
const tmp24: object = [];
```

最后是`{}`，一个奇奇怪怪的空对象，如果你了解过字面量类型，可以认为`{}`就是一个对象字面量类型（对应到字符串字面量类型这样）。否则，你可以认为使用`{}`作为类型签名就是一个合法的，但**内部无属性定义的空对象**，这类似于 Object（想想 `new Object()`），它意味着任何非 null / undefined 的值：

```typescript
const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
const tmp26: {} = null;
const tmp27: {} = void 0; // void 0 等价于 undefined

const tmp28: {} = 'linbudu';
const tmp29: {} = 599;
const tmp30: {} = { name: 'linbudu' };
const tmp31: {} = () => {};
const tmp32: {} = [];
```

虽然能够将其作为变量的类型，但你实际上**无法对这个变量进行任何赋值操作**：

```typescript
const tmp30: {} = { name: 'linbudu' };

tmp30.age = 18; // X 类型“{}”上不存在属性“age”。
```

这是因为它就是纯洁的像一张白纸一样的空对象，上面没有任何的属性（除了 toString 这种与生俱来的）。在类型层级一节我们还会再次见到它，不过那个时候它已经被称为“万物的起源”了。

最后，为了更好地区分 `Object`、`object` 以及`{}`这三个具有迷惑性的类型，我们再做下总结：

- 在任何时候都**不要，不要，不要使用** Object 以及类似的装箱类型。
- 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 `Record<string, unknown>` 或 `Record<string, any>` 表示对象，`unknown[]` 或 `any[]` 表示数组，`(...args: any[]) => any`表示函数这样。
- 我们同样要避免使用`{}`。`{}`意味着任何非 `null / undefined` 的值，从这个层面上看，使用它和使用 `any` 一样恶劣。

摘自：
林渡渡-《TS全面进阶指南》3.进入类型的世界：理解原始类型与对象类型