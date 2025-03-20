const sumAll = function(startNum, endNum) {
    finalSum = 0;
    if(!Number.isInteger(startNum) || !Number.isInteger(endNum)){
        return("ERROR");
    } // end if
    if(startNum < 0 || endNum < 0){
        return("ERROR");
    } // end if
    if(startNum > endNum){
        tempVar = endNum;
        endNum = startNum;
        startNum = tempVar;
    } // end if
    for(let i = startNum; i < endNum + 1; i++){
        finalSum += i;
    } // end for

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
