
/* 如果在使用类型断言时，原类型与断言类型之间差异过大，
  也就是指鹿为马太过离谱，离谱到了指鹿为霸王龙的程度，TypeScript 会给你一个类型报错：
 */
const str: string = 'linbudu';
(str as { handler: () => {} }).handler()


// (str as unknown as { handler: () => {} }).handler();


// 使用尖括号断言
// (<{ handler: () => {} }>(<unknown>str)).handler();
  