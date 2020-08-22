/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: readonly number[] = [30, 31, 27, 28, 32];

// temps.push(5);

const coords: [number, number] = [50.4501, 30.5234];
const rgb: [number, number, number] = [255, 0, 100];

const arrA = [1, 2, 3, 4, 5];

const arrB = [...arrA];

console.log(temps, coords, rgb);

export {};
