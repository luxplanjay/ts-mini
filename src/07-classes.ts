/*
 * Классы
 *  - объявление и типизация свойств
 *  - дефолтные значения свойств
 *  - публичные и приватные свойства и методы
 *  - readonly свойства
 *  - parameter properties +-
 *  - Статические свойства и методы
 *  - Интерфейс класса с implements
 */

interface Params {
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string;
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public size: string;
  private toppings: string[];

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private valdiateTopping(topping: string): boolean {
    console.log(topping);
    // валидация

    return true;
  }

  public addTopping(topping: string) {
    console.log(this.valdiateTopping(topping));
    this.toppings.push(topping);
  }
}

const pizza: IPizza = new Pizza({ size: "medium", toppings: ["cheese"] });
console.log(pizza);
pizza.addTopping("qweqwe");

export {};
