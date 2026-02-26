const sumAll = function (a, b) {
  if (typeof a !== typeof 1 || typeof b !== typeof 1) {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (!(Number.isInteger(a) && Number.isInteger(b))) {
    return "ERROR";
  }
  let min = a < b ? a : b;
  let toAdd = [];
  if (min === a) {
    for (let i = a; i <= b; i++) {
      toAdd.push(i);
    }
  }
  if (min === b) {
    for (let i = b; i <= a; i++) {
      toAdd.push(i);
    }
  }
  return toAdd.reduce((accumulator, currenVal) => {
    return accumulator + currenVal;
  }, 0);
};

// Do not edit below this line
module.exports = sumAll;
