// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
// Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num += 12;
// num -=  14;
// num *= 5;
// num /= 7;
// num ++;
// num--;

// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.

// const str = "string not starting with capital";
// console.log(str[0].toUpperCase() + str.slice());

// Ви просите користувача ввести суму його зарплати. Потім розраховуєте:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

// let salary = Number(prompt("Скільки Ви заробляєте?"));
// console.log(typeof salary);
// salary = (salary *= 1.15).toFixed(3);
// alert(`Ваша зарплата і премія складає ${salary}`);
// salary = (salary *= 0.9).toFixed(1);
// alert(`Після сплати податків сума ${salary}`);
// salary = (salary -= 190).toFixed(1);
// alert(`Після магазину залишок ${salary}`);
// salary = (salary /= 2).toFixed(1);
// alert(`Сума після поділу ${salary}`);

// Завдання
// /*
//  * Шаблонные строки
//  * Написать фразу с помощью конкатенации и шаблонных строк
//  * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
//  */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// console.log(
//     "Hello, my name is " +
//     name +
//     " I'm "
//     [age] years old and I like[hobby]");
//     Треба завершити

// Завдання
// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

// let totalResult = 0;
// for (let i = 1; i <= 10; i += 1) {
//   totalResult += i;
// }
// console.log(totalResult);

// let totalResult = 0;
// let i = 1;
// while (i <= 10) {
//   totalResult += i;
//   i += 1;
// }
// console.log(totalResult);

// let totalResult = 0;
// let i = 1;
// do {
//   totalResult += i;
//   i += 1;
// } while (i <= 10);
// console.log(totalResult);

// Завдання
// Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// console.log(vegetables.join()); // "Капуста, Ріпа, Редиска, Морква"
// let result = "  ";
// for (const str of vegetables) {
//   result += str + ",";
// }
// console.log(result.slice(0, result.length - 1));

// Завдання
//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

// var arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// function removeDuplicates(arr) {}

// const result = removeDuplicates(arr);
// console.log(result); // [php,css,script,html,java

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const makeArray = firstArray.concat(secondArray);
//   makeArray.slice([start], [end]);

// Change code above this line

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < 4; i += 1) {
//   // Change this line

//   const fruit = fruits[fruits.length < i]; // Change this line
//   console.log(fruit);
// }
