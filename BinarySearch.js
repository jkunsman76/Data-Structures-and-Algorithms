
// f5 select node.js to see in console. use a break point to run debugger and f10 to step through
// Binary Search is faster than a linear search but items must be in order
// the search has a low index, mid index, and high index
// when running the search, it moves from low to high and divides by 2 to create the mid,
// then based on the item being searched for it will disregard the low or high side of the mid index and then,
// repeat based on the new high and low index.
// this can be used with strings in alphabetical order also.

// time complexity result for Binary Search O(log n)

var counter = 0;

binary_search = function (list, itemToFind) {
    let lowIndex= 0;
    let highIndex = list.length - 1;
  
    while (lowIndex <= highIndex) {
      counter++;
      // Get the index of the element halfway between the low[0] and the high[11]
      let middleIndex = Math.floor((lowIndex + highIndex) / 2); //Math.floor will round down[5.5->5]

      
      // Get the value that is in the element with the middle index
      let itemWithMiddleIndex = list[middleIndex];
      
      if (itemWithMiddleIndex === itemToFind) {
          // We found the element location
          return middleIndex;
          // If we search for 5 it will run one time and find the answer in the number array.
      }
  
      if (itemWithMiddleIndex > itemToFind) {
          // Disregard all elements greater than the middle element
          highIndex = middleIndex - 1;
      }
      if (itemWithMiddleIndex < itemToFind) {
          // Disregard all elements less than the middle element
          lowIndex= middleIndex + 1;
      }
    }
  
    // We looped through the entire array and did not find the element
    return null;
  };
  
  list = [5, 7, 8, 10, 11, 12, 14, 17, 19, 20, 25, 29];
// list = ['alice','brian','david','frank','john','larry','mary',
//   'nancy','neil','theresa','tom','tony','victor','violet']
console.log(
  `Index of the value we are looking for: ${binary_search(list, 29)}`
);
console.log(`Number of steps to find it: ${counter}`);
