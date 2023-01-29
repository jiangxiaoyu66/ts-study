Symbol 在 JavaScript 中代表着一个唯一的值类型，它类似于字符串类型，可以作为对象的属性名，并用于避免错误修改 对象 / Class 内部属性的情况。而在 TypeScript 中，symbol 类型并不具有这一特性，一百个具有 symbol 类型的对象，它们的 symbol 类型指的都是 TypeScript 中的同一个类型。为了实现“独一无二”这个特性，TypeScript 中支持了 unique symbol 这一类型声明，它是 symbol 类型的子类型，每一个 unique symbol 类型都是独一无二的。

```typescript
const uniqueSymbolFoo: unique symbol = Symbol("linbudu")

// 类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo
```

在 JavaScript 中，我们可以用 `Symbol.for` 方法来复用已创建的 Symbol，如 `Symbol.for("linbudu")` 会首先查找全局是否已经有使用 `linbudu` 作为 key 的 Symbol 注册，如果有，则返回这个 Symbol，否则才会创建新的 Symbol 。

在 TypeScript 中，如果要引用已创建的 unique symbol 类型，则需要使用类型查询操作符 typeof ：

```typescript
declare const uniqueSymbolFoo: unique symbol;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo
```