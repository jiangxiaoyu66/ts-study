/** 异步函数的类型签名（类型签名，理解为类型声明就可以）
 * 和普通函数的类型签名相比，就是返回值必定是Promise类型的
 */

async function asyncFunc(): Promise<void> {}

function* genFunc(): Iterable<void> {}

async function* asyncGenFunc(): AsyncIterable<void> {}

export {};
