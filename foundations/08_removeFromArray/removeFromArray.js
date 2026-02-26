function isIn(element, omit) {
  let filtered = omit.filter((i) => i === element);
  return filtered.length == 0 ? false : true;
}

const removeFromArray = function (arr, ...omit) {
  return arr.filter((i) => isIn(i, omit) == false);
};
// Do not edit below this line
module.exports = removeFromArray;
