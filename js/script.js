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
