
var counter = 0;
linear_search = function (list, itemToFind) {
  for (x = 0; x < list.length; x++) {
    counter++;
    if (list[x] === itemToFind) {
      return x;
    }
  }
  return null;
};

list = [5, 7, 8, 10, 11, 12, 14, 17, 19, 20, 25, 29];
console.log(
  `Index of the value we are looking for: ${linear_search(list, 29)}`
);
console.log(`Number of steps to find it: ${counter}`);
