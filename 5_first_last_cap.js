/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let words = sentence.split(' ');
    capsArray =[];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word.toLowerCase();
        let firstChar = newWord[0].toUpperCase();
        let lastChar = newWord[newWord.length - 1].toUpperCase();

        newWord = firstChar + newWord.slice(1,-1) + lastChar
        capsArray.push(newWord)
    }
    return capsArray.join(' ')
}

console.log(firstLastCap('hello BOOTCAMP PrEp'));
console.log(firstLastCap('what is on the radio'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = firstLastCap;
