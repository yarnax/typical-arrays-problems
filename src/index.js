
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;    
  }
  let minimumValue = Infinity;
  array.forEach(element => {
    if (element < minimumValue) {
      minimumValue = element;      
    }
  });
  return minimumValue;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;    
  }
  let maximumValue = -Infinity;
  array.forEach(element => {
    if (element > maximumValue) {
      maximumValue = element;      
    }
  });
  return maximumValue;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let sumOfArray = 0;
  array.forEach(element => {
    sumOfArray += element;    
  });

  return sumOfArray / array.length;  
}
