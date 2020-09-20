// Информация////////////////////////////////////////////////////////////////////////////////////

// Переменные////////////////////////////////////////////////////////////////////////////////////

"use strict"; // используем новую директиву

// a = 15; dont work
// console.log(a);

/*
let number = 5;  //изменяемое
const leftBorderWidth = 1; //неизменяемое (почти)

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);

var name = 'ivan';

{
    let result = 50;
}

console.log(result);

*/


// Типы информации, что помещать в переменные////////////////////////////////////////////////////////////////////
/*
//Простые типы 
// Числа
// строки
// логический тип
// true.false
// null
// undefined
// Symbol
// biglnt

// Объекты                      // Обычные объекты
// Массивы
// Функции
// Объект даты
// Регулярные выражения
// Ошибки

//Числа


let number = 4.6;
console.log(4/0); // infinity - бесконечность
console.log('string' * 9); // NaN - not a number

//Строка
const persone = 'Alex';

//Логические (булевые)
const bool = true; 

// Null, undefined
//console.log(test); //null-undefined
let und; //null
console.log(und);


// Объекты
const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

//Массив - частный случай объекта!!
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[0]);

*/

// Общение с пользовательем///////////////////////////////////////////////////////////////////////
/*
//console
//alert('hello');

// const result = confirm('Are you here?'); // ? с ответом и записывает в значение (true/false)
// console.log(result);

// const answer = prompt('Вам есть 18?', '18'); // Задает вопрос с формой ответа , записывает ответ как строку
// console.log(answer);  //string - вся информация от пользователя идет как СТРОКА
//                                 // если поставить + перед +prompt - возвращает число


const answers = [];
answers[0] = prompt('Ваше имя?', '');  // prompt, confirm, alert- существуют только в браузере
answers[1] = prompt('Ваше фамилия?', '');
answers[2] = prompt('Сколько лет', '');

console.log(typeof(answers)); // obj

*/


// Интерцполяция/////////////////////////////////////////////////////////////////////////////////////
/*
const category = 'toys';
//console.log('https://someurl.com/' + category + '/');
console.log(`https://someurl.com/${category}/5`); //исп бэектики

const user = 'df3r';
alert(`привет, ${user}`);
*/

// Операторы/////////////////////////////////////////////////////////////////////////////////////
/*
console.log('arr' + ' - object');
console.log(4 + ' - object');
console.log(4 + +'str'); //Nan
// + делает строку числом 
console.log(4 + +'5'); //9

let incr = 10, //инкремент
    decr = 10; //декремент

incr++; //инкремент увеличение на 1  ПОстфиксная - возвращает сначала старое значение (нужно 2 действия)
decr--; //декремент - уменьшение на 1  ПОстфиксная - возвращает сначала старое значение (нужно 2 действия)

// (либо ++incr) ПРЕФИКСНАЯ 
// (либо --decr) ПРЕФИКСНАЯ 

console.log(incr);
console.log(decr);

console.log(5%2); // остаток от деления

// = присваивание
// == сравнить по значению
// === строгое равенство (по типу и значению)

console.log(2*4 === '8');

// && -and , || - or, ! отрицание

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
*/



//Практика 1/////////////////////////////////////////////////////////////////////////////////////
/*
let numberOfFilms = [];


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

const a = prompt('Один из просмотренных фильмов', ''),
      b = +prompt('На сколько вы оцените его', ''),
      c = prompt('Один из просмотренных фильмов', ''),
      d = +prompt('На сколько вы оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(numberOfFilms);
console.log(personalMovieDB);

// кнаконец то зарабботал тупой git!!!!

*/

//Условия/////////////////////////////////////////////////////////////////////////////////////
/*
if (4 == 9) {
    console.log('OK');
} else {
    console.log('notOK');
}

const num =50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('toMuch');
} else {
    console.log('OR');
}



// тернарный оператор
(num ===50) ? console.log('OR') : console.log('errr');

//бинарный оператор 4 + 4
// унарный оператор +4

// switch
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('не в этот раз');
        break;
};

*/


//Цикл/////////////////////////////////////////////////////////////////////////////////////
/*
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// цикл for

for (let i = 1; i < 10; i++) {
    console.log(i ===6);
    break;
    //continue - пропускает 6 и идет дальше
    // console.log(num);
    // num++;
};

*/

/////Функция  ///////////////////////////////////////////////////////////////////////////////////////
/*
let num = 30;

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage('hello word');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 10));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//класификация функций
// function declaration - создается до начала выполнения скрипта, можно вызвать перед объявлением
        //function foo () {}
// function expression -создается только тогда, когда доходит поток кода, вызывается после объявления
        // let foo=function() {};

const logger = function() {
    console.log('hello');
};
logger();

// стрелочные функции ()=> не имеет своего контекста (this)
const calc = (a, b) => { return a + b }; //  если код в 1 строчку, то можно const calc = (a, b) => a + b ;
*/

/////методы и свойства строк и чисел  ////////////////////////////////////////////////////////////////////////////
/*
const str = 'test';

console.log(str.length);

console.log(str[2]);
console.log(str.toUpperCase());

console.log(str);

let fruit = 'Some fruit';

console.log(fruit.indexOf("fruit"));


const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11)); //=slice

console.log(logg.substr(6, 2)); // от до сколько символов

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test)); // метод преодразует в числовой вид данных (целое)
console.log(parseFloat(test)); // метод преодразует в числовой вид данных (дробное)

*/

/////Callback функции  ////////////////////////////////////////////////////////////////////////////
/*
function first() {
    // do smth
    setTimeout(function()  {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// callback -функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок')
}

learnJS ('JS', done); //круглые скобки не ставим, т.к. мы не вызываем функцию, а передаем ее
*/

/////Объекты , деструктуризация объектов ////////////////////////////////////////////////////////////////////////////

/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {   //метод, встроенный в объект
        console.log('TEst');
    }
};

console.log(options.name);

//delete options.name;  // удаление

console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
        }
}

console.log(counter);

console.log(Object.keys(options).length);  // создает массив из ключей

options.makeTest();


//деструктуризация

const {border, bg} = options.colors; // вытаскиваем свойства из ключа из ключа colors в качестве отдельных переменных
console.log(border, bg); //печатает black, red
*/

/////Массивы и псевдомассивы////////////////////////////////////////////////////////////////////////////
/*
const arr = [1, 22, 3, 4, 8];
// arr[99] = 0;
// console.log(arr.length);

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});


arr.pop();  //удаляет последний элемент массива
console.log(arr);
arr.push(10); // добавляет в конец 
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {  // of работает с массивами,map,set
    console.log(value);     //можно использовать break, continue
}

const str = prompt('', '');
const products = str.split(', '); // создает массив из строки с указанием разделителя
products.sort(); // сортирует как строки по алфавиту
console.log(products.join('; ')); // создает строку из массива с разделителем
*/


/////Передача по ссылке или по значению, Spread оператор//////////////////////////////////////////////////
/*
let a = 5,
    b = a;

b = b+ 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // ссылка на объект // передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// // копия объекта

function copy(mainObj) { // поверхностная копия
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
    d:17,
    e:20
};

console.log(Object.assign(numbers, add)); // слияние 2 массивов

const clon = Object.assign({}, add);

clon.d = 20;

console.log(clon); 


// копия массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'sddfswe'
console.log(newArray, oldArray);

//оператор для разворота 
const video = ['youtube', 'video', 'rutubr'],
      blogs = ['dfdf', 'dfdf', 'sdsdwe'],
      inernet = [...video, ...blogs, 'dfd', 'er3d'];
console.log(inernet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6];

log(...num);

// 4 способ поверхностного клон объ

const array = ['a', 'b'];
const q = [...array];

const qw = {
    one: 1,
    two: 2
};

const newOb = {...qw};
console.log(newOb);
*/
/////Основы ООП (прототип-ориент-наследование//////////////////////////////////////////////////////////////////


// let str = 'sone';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);
/*
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john1 = Object.create(soldier); // новый метод

const john = {
    health: 100
};

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();

*/
/////Ошибки в коде в консоли разработчика////
