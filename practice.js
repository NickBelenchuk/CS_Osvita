//// Array.map() ////
// Задача 1: Є масив чисел [1, 2, 3, 4, 5]. Створи новий масив, де кожне число помножене на 2.

const arr = [1, 2, 3, 4, 5];
const result = arr.map(num => num * 2);
console.log(result);

// Задача 2: Є масив імен ['anna', 'bob', 'charlie']. Створи новий масив, де всі імена написані великими літерами.
const names = ['anna', 'bob', 'charlie'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

// Задача 3: Є масив цін [100, 200, 300]. Додай до кожної ціни 20% податку та створи новий масив.
const prices = [100, 200, 300];
const pricesTax = prices.map(price => price * 1.2);
console.log(pricesTax);


//// Array.filter() ////
// Задача 4: Є масив [5, 12, 8, 130, 44]. Відфільтруй тільки числа більше 10.
const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

// Задача 5: Є масив слів ['apple', 'banana', 'kiwi', 'strawberry']. Залиш тільки ті слова, довжина яких більше 5 символів.
const fruits = ['apple', 'banana', 'kiwi', 'strawberry'];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// Задача 6: Є масив чисел [1, 2, 3, 4, 5, 6, 7, 8]. Відфільтруй тільки парні числа.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);


//// push / pop ////
// Задача 7: Створи масив ['apple', 'banana']. Додай в кінець 'orange' та 'grape' за допомогою push. Виведи результат.
const fruitsArr = ['apple', 'banana'];
fruitsArr.push('orange', 'grape');
console.log(fruitsArr);

// Задача 8: Є масив [1, 2, 3, 4, 5]. Видали останній елемент за допомогою pop і збережи його в змінну. Виведи і масив, і видалений елемент.
const numArr = [1, 2, 3, 4, 5];
const newArr = numArr.pop();
console.log(numArr);
console.log(newArr);


//// shift / unshift ////
// Задача 9: Є масив ['second', 'third']. Додай на початок 'first' за допомогою unshift. Виведи результат.
const arrShift = ['second', 'third'];
arrShift.unshift('first');
console.log(arrShift);

// Задача 10: Є масив [10, 20, 30, 40]. Видали перший елемент за допомогою shift і збережи його в змінну. Виведи обидва результати.
const arrNum = [10, 20, 30, 40];
const firstElement = arrNum.shift();
console.log(arrNum);
console.log(firstElement);


//// Комбіновані задачі ////
// Задача 11: Є масив [1, 2, 3, 4, 5, 6]. Відфільтруй непарні числа, потім помнож кожне на 3.
const combo = [1, 2, 3, 4, 5, 6];
const smthArr = combo
  .filter(num => num % 2 !== 0)
  .map(num => num * 3);
console.log(smthArr);

// Задача 12: Створи порожній масив. Додай туди числа 1, 2, 3 через push. Потім видали перший елемент через shift.
const emptyArr = [];
emptyArr.push(1, 2, 3);
emptyArr.shift();
console.log(emptyArr);
