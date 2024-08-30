// .reduce() = reduce the elements of an array to a single value.

const prices = [5, 30, 10, 25, 15, 10];

const total = prices.reduce(sum);

console.log(`R$${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator + element;
}

/* 

In this example it's possible to change the parameters names. Replace accumulator for
'previous' and element for 'next'. 

With that being said:

previous + next

Computers are weird, they start to count from 0 to the next number. So '0' would the
previous, and '5' would the next.
Passing to the next element, the sum between 0 and 5 becomes the new 'previous' and it 
is summed with 30 and so on.

*/

const grades = [75, 50, 90,80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(previous, next){
    return Math.max(previous, next);
}

function getMin(previous, next){
    return Math.min(previous, next);
}