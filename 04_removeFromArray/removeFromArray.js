const removeFromArray = function(oldArray, ...args) {
    return oldArray.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
