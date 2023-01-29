// 相关说明可以看./symbol.md

// 使用 unique symbol 声明symbol类型，每一个 unique symbol 类型都是独一无二的。

const uniqueSymbolFoo: unique symbol = Symbol('linbudu');

// 类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo;



// declare相关知识 见文件：