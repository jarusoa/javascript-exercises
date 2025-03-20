const leapYears = function(year) {
    if(((year % 4 == 0) && !(year % 100 == 0) || (year % 400 == 0))){
        return true;
    } // end if
    else{
        return false;
    } // end
};

// Do not edit below this line
module.exports = leapYears;
