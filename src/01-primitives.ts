/*
 * Примитивные типы
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */

let age: number = 5;
const name: string = "mango";

let value: any = 5;
value = "qweqwe";

// 💩
let user: object;
user = {};

let id: string | number | boolean = 5;
id = "sqwwqe";
id = true;

console.log(age, name, id, value, user);
export {};
