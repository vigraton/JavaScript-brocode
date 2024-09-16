/*
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

let array = [1, 2, 3, 4, 5];

function displayNum(arr){
    arr.sort((a, b) => a - b);
    let second_lowest = arr[1];
    let second_greatest = arr[arr.length - 2];
    return [second_lowest, second_greatest];
}

console.log(displayNum(array));