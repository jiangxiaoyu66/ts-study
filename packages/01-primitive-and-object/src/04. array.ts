/* 01. 基础用法，也是常用用法 */
const arr1: string[] = [];
const arr2: Array<string> = [];

const arr3: string[] = ['lin', 'bu', 'du'];

console.log(arr3[599]);



/* 02. 固定长度用法 */
const arr4: [string, string, string] = ['lin', 'bu', 'du'];
const arr5: [string, number, boolean] = ['linbudu', 599, true];
const [name, age, male, other] = arr5;
console.log(arr4[599]);

/* 固定长度——可选 */ 
const arr6: [string, number?, boolean?] = ['linbudu'];
// 这么写也可以
// const arr6: [string, number?, boolean?] = ['linbudu', , ,];

type TupleLength = typeof arr6.length; // 1 | 2 | 3

/* 固定长度——对应字段命名 */ 

const arr7: [name: string, age: number,  male: boolean] = ['linbudu', 599, true];
const arr8: [name: string, age: number,  boolean] = ['linbudu', 599, true];


export {};
