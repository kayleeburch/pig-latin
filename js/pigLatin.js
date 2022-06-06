exports.translate = function(word) {
    if(word.split(' ').length > 1){
        return multipleWords(word.split(' '))
    } else {
        let isUpperCase = false
        if(word.split('')[0].toUpperCase() === word.split('')[0]){isUpperCase = true}
        let words = word.toLowerCase().split('')
        let addBackIn = []
        const regex = /[^A-Za-z0-9]/g
        for(let i = 0; i < words.length; i++) {
            const vowels = ['a','e','i','o','u']
            if(vowels.indexOf(words[i]) === -1 && words[i] !== 'q'){
                addBackIn.push(words[i])
            } else if(words[i] === 'q' && words[i + 1] === 'u'){
                addBackIn.push(words[i])
                addBackIn.push(words[i + 1])
            } else {
                break
            }
        }

        let remainderOfWords = words.splice(addBackIn.length)
        let result = remainderOfWords.join('') + addBackIn.join('') + 'ay'
        if(isUpperCase == true){result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()}
        // console.log(result)
        return result
    }
};

function multipleWords(words){
    let result = []
    for(let word in words){
        result.push(exports.translate(words[word]))
    }
    return result.join(' ');
    
}
