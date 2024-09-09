// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function getLength(string){
    return string.split(' ').reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    });
}

console.log(getLength("Web Development Tutotrial"));