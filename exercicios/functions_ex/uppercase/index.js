// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function letraMaiuscula(letra){
    return letra.split(' ').map(palavra => 
        palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
}

console.log(letraMaiuscula('the quick brown fox'));