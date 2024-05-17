function capitalizeString(text) {
    const firstChar = text.charAt(0).toUpperCase();
    const restOfString = text.slice(1).toLowerCase();
    return firstChar + restOfString;
}
let word = 'nIKITA'
console.log(capitalizeString(word))



function letterSum(text) {
    let count = 0;
    for (let letter of text.toLowerCase()){
        if (letter === symbol.toLowerCase()){
            count++;
        }
    }
    return count;
}
let word2 = 'NIkita'
let symbol = 'I'

console.log('В слове', word2, letterSum(word2), symbol)