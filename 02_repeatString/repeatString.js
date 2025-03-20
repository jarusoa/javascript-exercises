const repeatString = function(word, num) {
    if(num < 0){
        return("ERROR");
    } // end if
    fullWord = ""
    for(let i = 0; i < num; i ++){
        fullWord += word;
    } // end for
    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
