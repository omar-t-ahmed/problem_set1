/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function remover(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    
    for (let i = 0; i < word.length; i++ ) {
        let char = word[i]
        
        if (vowels.indexOf(char) === -1) {
            newStr += char;
        }
    }
        return newStr;
    }


console.log(remover('bootcamp'))

function abbreviate(sentence) {
    let words = sentence.split(' ');
    arr = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        if (words.length > 4) {
            let newWord = remover(word);
            arr.push(newWord);
        } else {
            arr.push(word);
        }
    }
    return arr.join(' ');
}


console.log(abbreviate('bootcamp prep is fun'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
