// 1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.

const a = Number(10);
const b = Number(50);
const sum = a * b;
console.log(sum);

// 2) Створіть дві змінні c  та d. Виведіть у консоль результат ділення першого на друге.

const c = Number(10);
const d = Number(50);
const sum1 = a / b;
console.log(sum1);

// 3) Створіть дві змінні e  та f. Виведіть у консоль результат додавання.

const e = Number(10);
const f = Number(50);
const sum2 = a + b;
console.log(sum2);

// 4) Визначте змінні зі значеннями 11, true, "java script", "100"  і виведіть їх в консоль.

console.log('typeof 11:', typeof 11);
console.log('typeof true:', typeof true);
console.log('typeof "java script":', typeof "java script");
console.log('typeof "100":', typeof "100");

// 5) *Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;

let num = 1;
num += 11;
console.log(num);

let num1 = 1;
num1 -= 11;
console.log(num1);

let num2 = 1;
num2 *= 11;
console.log(num2);

let num3 = 1;
num3 /= 11;
console.log(num3);

let num4 = 1;
num4++;
console.log(num4);

let num5 = 1;
num5--;
console.log(num5);

// * * * * * * * * * * * * * * * * * * * * * * * * * *

// Завдання на введення/виведення (вводити з допомогою prompt, виводити з допомогою alert або console.log або на сторінку):

// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.

const x = Number(prompt('Введіть число:'));
console.log(Math.pow(x, 2));

// 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

const firstNumber = Number(prompt('Введіть число:'));
const secondNumber = Number(prompt('Введіть число:'));
const arithmeticMean = (firstNumber + secondNumber) / 2;
console.log(arithmeticMean);

// 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача. 

let firstMinuts = Number(prompt('Введіть к-ть хвилин:'));
firstMinuts *= 60;
console.log(firstMinuts);

// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію). 
// *Додайте в розмітку отриманий рядок в елемент p.

const greeting = 'Hello ';
const userName = (prompt('Введіть імʼя'));
const message = greeting + userName + '!';
console.log(message);
alert(message);

// Далі знайшов інформацію про те що "*Додайте в розмітку отриманий рядок в елемент p."
// робиться за допомогою DOM (Document Object Model), а це 37 лекція вирішив що буде не честно нагуглить відповідь не знаючи її.


























