
// Arrays!!! [1,2,3,4,5,6,7]

// unshift=add to beginning of array and shift=remove from beginning of array

// pop= remove from end of array and push=add to end of array


let testArray = [1,2,3,4,5,6,7];
testArray = [1,2];
testArray = [1,2,3,4];
testArray[2] = 7;
console.log(testArray[0]);
testArray = [1, 2, 3, 4];
value = testArray.shift();
console.log(testArray);
console.log(value);
testArray.unshift(8);
console.log(testArray);
testArray = [1, 2, 3, 4];
value = testArray.pop();
console.log(testArray);
console.log(value);
testArray.push(8);
console.log(testArray);
