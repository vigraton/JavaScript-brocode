// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function getLength(string){
    return string.split(' ').map(word => 
    word.length())
}