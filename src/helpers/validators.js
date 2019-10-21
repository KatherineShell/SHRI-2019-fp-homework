/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import { replace, length, compose, test, curry } from 'ramda';
import { overEvery, overSome } from 'lodash';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);


/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */
const moreValue = (limit, val) => val > limit;
const lessValue = (limit, val) => val < limit;
const isValExist = (val, str) => new RegExp(val).test(str);
const opposite = val => !val;
// const curriedFun = curry(lenMoreFive);

/**
 * Функции для проверки выполнения условий с длиной строки
 */

/**
 * Функции для проверки наличия конкретного символа в строке
 */

// 1. Длина < 5 и кол-во цифр > 2 шт.
const curriedLenFive = curry(lessValue)(5);
const curriedNumbersTwo = curry(moreValue)(2);
const isLenLess = compose(curriedLenFive, length);
const isNumLenMore = compose(curriedNumbersTwo, getNumbersCount);

export const validateFieldN1 = overEvery([isLenLess, isNumLenMore]);

// 2. Длина < 5 и кол-во цифр < 2 шт.
const curriedLenNumTwo = curry(lessValue)(2);
const isNumLenLess = compose(curriedLenNumTwo, getNumbersCount);

export const validateFieldN2 = overEvery([isLenLess, isNumLenLess]);

// 3. Длина > 5 или кол-во цифр > 1 шт.
const curriedLenMoreFive = curry(moreValue)(5);
const curriedNumLenOne = curry(moreValue)(1);
const isLenMoreFive = compose(curriedLenMoreFive, length);
const isNumLenMoreOne = compose(curriedNumLenOne, getNumbersCount);

export const validateFieldN3 = overEvery([isLenMoreFive, isNumLenMoreOne]);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
const curriedLenLessTen = curry(lessValue)(10);
const isLenLessTen = compose(curriedLenLessTen, length);
const isFourExist = curry(isValExist)(4);

export const validateFieldN4 = overEvery([isLenLessTen, isNumLenMore, isFourExist]);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
const isNotFour = compose(opposite, isFourExist);

export const validateFieldN5 = overEvery([isLenLessTen, isNumLenMoreOne, isNotFour]);

// 6. Длина > 5, или одна из цифр равна "7"
const isSevenExist = curry(isValExist)(7);

export const validateFieldN6 = overEvery([isLenMoreFive, isSevenExist]);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
const curriedNumLenThree = curry(moreValue)(3);
const isNumLenMoreThree = compose(curriedNumLenThree, getNumbersCount);
const curriedLenMoreEight = curry(moreValue)(8);
const isLenMoreEight = compose(curriedLenMoreEight, length);

export const validateFieldN7 = overEvery([isNumLenMoreThree, isLenMoreEight, containsOnlyEng]);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = overSome([isLenLess, containsOnlyEng, isSevenExist]);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
const curriedLenLessEight = curry(lessValue)(8);
const isLenLessEight = compose(curriedLenLessEight, length);
const curriedNumbersMoreFour = curry(moreValue)(4);
const isNumLenMoreFour = compose(curriedNumbersMoreFour, getNumbersCount);

export const validateFieldN9 = overEvery([containsOnlyEng, isLenLessEight, isNumLenMoreFour]);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
const curriedLenLessFour = curry(lessValue)(4);
const isLenLessFour = compose(curriedLenLessFour, length);

export const validateFieldN10 = overSome([isLenLessFour, isNumLenMore, containsOnlyEng]);
