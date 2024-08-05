/* Operadores aritméticos: operandos (valores, variáveis, etc.)
    operadores (+ - * /)
    ex. 11 = x + 5
*/

let students = 31;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;

let extraStudents = students % 3;
//students = students % 2;

// Para não escrever a variável duas vezes:

students += 1;
students -= 10;
students %= 2;

console.log(students);