const convertToCelsius = function(fTemp) {
  cTemp = (5/9) * (fTemp - 32);
  return(Math.round(cTemp * 10) / 10);
};

const convertToFahrenheit = function(cTemp) {
  fTemp = ((9/5) * cTemp) + 32;
  return(Math.round(fTemp * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
