'use strict';

let fullname = 'Natasha';
console.log(fullname);

// Створіть змінну age і присвойте їй ваш вік.Виведіть в консоль
// рядок, що містить ваш вік у такому форматі: "Мені {вік} років".
let age = 42;
let message = `Мені ${age} років`;
console.log(message);

// Створіть змінні x і y і присвойте їм довільні числа.Виведіть 
// в консоль результати додавання, 
// віднімання, множення та ділення цих чисел.

let x = 92;
let y = 13;
console.log(x + y);

// Створіть змінну city і присвойте їй назву вашого міста.
//  Створіть рядок, який містить "Я живу в місті {назва міста}",
//     і виведіть його в консоль.

let city = `Kyiv`;
// let mess = `Я живу в місті ${city}`;
console.log(`Я живу в місті ${city}`);

// Створіть рядок з вашою електронною поштою. Використайте
// методи рядка, щоб витягнути ваше ім'я та доменну частину.
// Виведіть обидва ці значення в консоль.

let email = 'natalim@ukr.net';
const username = email.substring(0, email.indexOf('@'));
const domain = email.substring(email.indexOf('@') + 1);
console.log(`Імя користувача: ${username}`);
console.log(`Домен: ${domain}`);

// Створіть змінну price і присвойте їй число.Створіть
// рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

let price = 500;
let title = `Ціна ${price} грн`;
console.log(title);

// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.

let firstName = 'Natasha';
let lastName = 'Tur';
let fullName = `${firstName}` + ` ` + `${lastName}`;
console.log(fullName);

// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

let a = 35;
let b = 24;
let sum = a + b;
console.log(sum);

let c = 35;
let d = 13;
let difference = c - d;
console.log(difference);

let e = 66;
let i = 33;
let product = e * i;
console.log(product);

let n = 133;
let m = 11;
let quotient = n / m;
console.log(quotient);

// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом,
// який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

let radius = 5;
let π = 3.14;
let squared = π * (Math.pow(radius, 2));
console.log(squared);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

let text = 'Hello! how are you?';
console.log(text.length);

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

let someString = 'Hello! how are you?';
let firstLetter = someString[0];
console.log(firstLetter);

let someStringTwo = 'Hello! how are you?';
let lastLetter = someStringTwo.lenght -1;
console.log(lastLetter);


// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"

let str1 = 'Hello';
let str2 = 'World';
let lastLetter1 = str1[str1.length -1];
let lastLetter2 = str2[str2.length -1];
let str3 = lastLetter1 + lastLetter2;
console.log(str3);