// let a = 'string',
//     b = "srting";


//     console.log(a[1], a[2 ])


    /* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */

    // let str = 'aaa@bbb@ccc';

    // console.log(str.replace(/@/g, '!'));

    /* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. */

    // let date = '2025-12-31';

    // console.log(date.replace(/(2025)-(12)-(31)/,'$3/$2/$1'));

    /* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice). */

    // let str = 'Я учу javascript!';
    // let strslice = str.slice(4,8);
    // console.log(strslice)


//     let str3 = 'Я учу javascript!';

// console.log(str3.substr(2, 4));
// console.log(str3.substr(6, 10));
// console.log(str3.substring(2, 5));
// console.log(str3.substring(6, 16));
// console.log(str3.slice(2, 5));
// console.log(str3.slice(6, 16));

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let num = 0;
// for(let i=0; i<arr.length; i++){
//   num += Math.pow(arr[i], 3);;
// }
// let square = Math.sqrt(num);
// console.log(square)


/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */

// function num(a, b) {
    
//   let c = Math.abs(a - b);
//   console.log(c);
// }

// num(3, 6);
// num(6, 1);

/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */

let str = 'aa aba abba abbba abca abea';
let regex = /ab+a/g;
let matches = str.match(regex);
console.log(matches);
