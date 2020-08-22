/*
 * Интерфейсы
 *  - Конструкция `interface`
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */

interface PluginConfig {
  readonly selector: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
}

const config: PluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  // startIndex: 0,
  // draggable: false,
};

// console.log(config);

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 15,
  wiki: 20,
};

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log(bestEmployeeName);

export {};
