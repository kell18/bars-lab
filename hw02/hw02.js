/**
 * Задание 1. Реализовать конструктор класса Warrior, который в качестве параметров
 * принимает имя и уровень воина. У созданного при помощи этого конструктора объекта
 * должны имя и уровень должны быть доступны в качестве полей экземпляра.
 * Если задание выполнено правильно, то код:
 * <code>
 *   var warrior = new Warrior("Joda", 100);
 *   warrior.name; // == "Joda"
 *   warrior.level; // == 100
 * </code>
 * выполнится без ошибок.
 */

/**
 * Создает экземпляр воина
 * @param {String} name Имя воина.
 * @param {Number} level Уровень воина.
 */
function Warrior(name, level) {
  this.name = name;
  this.level = level;
  this.warriorCode = "";
}

/**
 * Задание 2. Добавить метод attack нашему воину.
 * Метод возвращает уровень воина умноженный на коэффициент 0.1.
 * Подсказка: используйте prototype.
 */

/**
 * Метод атаки воина.
 * @example
 * warrior.attack(); // Воин атакует.
 * @name {Warrior.attack}
 * @return {Number} Урон, наносимой атакой.
 */
Warrior.prototype.attack = function () {
  return this.level * 0.1;
};

/**
 * Метод произнесения кодекса.
 * @example
 * warrior.getCode(); // Воин произносит кодекс.
 * @name {Warrior.getCode}
 * @return {String} Кодекс воина.
 */
Warrior.prototype.getCode = function () {
  return this.warriorCode;
};

/**
 * Задание 3. Создать наследников класса Warrior: Jedi, Sith.
 * Конструкторы Jedi и Sith так же принимают имя и уровень.
 * Добавить к каждому из классов поле sideOfForce со значениями "light" и "dark", соответственно.
 * Классу Warrior добавить метод getCode, возвращающий кодекс воина.
 * Кодекс джедая: "Нет волнения — есть покой...".
 * Кодекс ситха: "Спокойствие — ложь, есть только страсть..."
 */

/**
 * Создает экземпляр джедая
 * @param {String} name Имя джедая.
 * @param {Number} level Уровень джедая.
 * @extends {Warrior}
 */
function Jedi (name, level) {
  Warrior.apply(this, arguments);
  this.sideOfForce = "light";
  this.warriorCode = "Нет волнения — есть покой...";
}
Jedi.prototype = Object.create(Warrior.prototype);

/**
 * Создает экземпляр ситха
 * @param {String} name Имя ситха.
 * @param {Number} level Уровень ситха.
 * @extends {Warrior}
 */
function Sith (name, level) {
  Warrior.apply(this, arguments);
  this.sideOfForce = "dark";
  this.warriorCode = "Спокойствие — ложь, есть только страсть...";
}
Sith.prototype = Object.create(Warrior.prototype);

/**
 * Задание 4. Добавить метод toLightSide классу Jedi.
 * Метод в качестве параметра принимает экземпляр класса Sith.
 * Если тип передаваемого аргумента не Sith, то выбрасывается исключение.
 * Если уровень джедая выше чем уровень ситха, то ситх переходит
 * на светлую сторону (значение поля sideOfForce у ситха становится "light"), 
 * иначе джедай переходит на темную.
 */

/**
 * Метод призыва на светлую сторону.
 * @example 
 * joda.toLightSide(darth); // Мастер Йода на светлую сторону силы призывает.
 *
 * @name {Jedi.toLightSide}
 *
 * @param {Sith} sith Ситх, призываемый на светлую сторону
 *
 * @throws Error("Invalid argument")
 * Если призываемый объект не является ситхом, выкидывается исключение.
 */
Jedi.prototype.toLightSide = changeSideOfForce;

/**
 * Задание 5. Добавить метод toDarkSide классу Sith.
 * Метод в качестве параметра принимает экземпляр класса Jedi.
 * Если тип передаваемого аргумента не Jedi, то выбрасывается исключение.
 * Если уровень ситха выше чем уровень джедая, то джедай переходит
 * на светлую сторону (значение поля sideOfForce у джедая становится "dark"), 
 * иначе ситх переходит на светлую.
 */

 /**
 * Метод призыва на темную сторону.
 * @example 
 * palpatine.toDarkSide(anakin); // Не поддавайся темной силе ты.
 * @name Sith.toDarkSide
 * @param {Jedi} jedi Джедай, призываемый на темную сторону
 * @throws Error("Invalid argument")
 * Если призываемый объект не является джедаем, выкидывается исключение.
 */
Sith.prototype.toDarkSide = changeSideOfForce;

/**
 * Method using in children of Warrior class,
 * for changing side of forse Jedi or Sith.
 * @param {Jedi|Sith} warrior Inherited from warrior
 * Sith of Jedi instance
 * @returns {boolean} true - if success, false - if
 * warrior is not obeyed (this case means, what warroir
 * passed to enother side of force)
 */
function changeSideOfForce(warrior) {
  var sideThis, sideWar;
  if (!warrior) {
    throw new Error("Invalid warrior instance");
  }

  sideThis = (typeof(this.sideOfForce) === "string") && this.sideOfForce;
  sideWar = (typeof(warrior.sideOfForce) === "string") && warrior.sideOfForce;
  if (!sideThis || !sideWar || sideThis === sideWar) {
    throw new Error("Invalid argument");
  }
  if (!this.level || !warrior.level) {
    throw new Error("Invalid argument");
  }

  if (this.level > warrior.level) {
    warrior.sideOfForce = sideThis;
  } else {
    this.sideOfForce = sideWar;
  }
  return sideThis > sideWar;
}