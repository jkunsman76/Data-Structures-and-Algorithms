console.log("works")
// Data Structors

// arrays [] 
// selection sort
// stacks and ques
// hash tables key:value pairs used in MAP() in javascript
// link list 

// liner search runs from start to finish 
// like this function below, it will run 56 times before it hits 57 
// bigO notation === O(n)





// numberToGuess = 57;

// for (x = 1; x <= 100; x++) {
//   if (x === numberToGuess) {
//     console.log("Correct");
//     break;
//   } else {
//     console.log("Wrong");
//   }
// }
// it tells the time complexity
// numberToGuess = Math.floor(Math.random() * (101 - 1) + 1); //The maximum (101) is exclusive meaning 101 is
//                          not included and Math ends at 100 and the minimum (1) is inclusive

// function guessTheNumber(max) {
//   numberToGuess = Math.floor(Math.random() * (max - 1) + 1);

//   for (x = 1; x < max; x++) {
//     if (x === numberToGuess) {
//       console.log("Correct");
//       break;
//     } else {
//       console.log("Wrong");
//     }
//   }
// }

// guessTheNumber(100);
// guessTheNumber(1000);
// guessTheNumber(10000);




// function plusMinus(arr) {
//   // Write your code here
//   //  count number of poitive, negative, and zero numbers
//   // divide each by total number of to get ratio
//   // vv Print the Ratios for answer vv
//   //  positiveRatio = 
//   //  negativeRatio = 
//   //  zeroRatio = 
//   // ^^ Print the Ratios for answer ^^
//   // arr.length = number to divide by
//   // loop arr and if number is + push to arr+, - push to arr-, 0 push to arr0

//   let arrayP = []
//   let arrayN = []
//   let arrayZ = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 1) {
//       arrayP.push(arr[i])
//     } else if (arr[i] <= -1) {
//       arrayN.push(arr[i])
//     } else arrayZ.push(arr[i])
//   }
 
// let pRatio = (arrayP.length / arr.length)
// let nRatio = (arrayN.length / arr.length)
// let zRatio = (arrayZ.length / arr.length)
// return console.log(pRatio.toFixed(6)),console.log(nRatio.toFixed(6)),console.log(zRatio.toFixed(6))
// }
// arr = [-4, 3, -9, 0, 4, 1]
//  console.log(plusMinus(arr))

//? sum of an array of numbers
// function simpleArraySum(ar) {
//  Write your code here
//   let sum = 0
//   for (let i = 0; i < ar.length; i++) {
//     sum = sum + ar[i]
//   }
//   return sum
// }


// ? diagonal sum difference in matrix
// function difference(arr,n)
//     {
//         // Initialize sums of diagonals
//         let d1 = 0, d2 = 0;
     
//         for (let i = 0; i < n; i++)
//         {
//             for (let j = 0; j < n; j++)
//             {
//                 // finding sum of primary diagonal
//                 if (i == j)
//                     d1 += arr[i][j];
     
//                 // finding sum of secondary diagonal
//                 if (i == n - j - 1)
//                     d2 += arr[i][j];
//             }
//         }
     
//         // Absolute difference of the sums
//         // across the diagonals
//         return Math.abs(d1 - d2);
//     }


// ? compare values in array to each other and award points matching conditional
// function compareTriplets(a, b) {
//   // Write your code here
//   let acount = 0
//   let bcount = 0
//   let same = 0
//   while (a.length !== 0) {
//   let aInt = a.shift()
//   let bInt = b.shift()
//   if (aInt>bInt) {
//     acount++ 
//   } else if (aInt<bInt) {
//     bcount++
//   } else {
//     same++
//   }
// }
// return [acount,bcount]
// }

// const a = [1, 2, 3]
// const b = [3, 2, 1]
// console.log(compareTriplets(a,b))


// function fizzBuzz(n) {
//   // Write your code here
//   let i = 0;
// while(i++!=n){
//   if((i%3)===0&&(i%5)===0){
//       console.log("FizzBuzz")
//   }else if((i%5)===0) {
//       console.log("Buzz")
//   }else if((i%3)===0){
//       console.log("Fizz")
//   } else console.log(i)
// }
// }
// n=15
// console.log(fizzBuzz(n))













function getTime(s) {
  // Write your code here
  // A-Z starts at A... each movement takes 1 second. can move in both directions.
  // example BZA on circular printer would take 4 seconds (1 forward 2 back 1 forawrd)
  // parameter (s) is a string of characters to be printed
  // return the minimum number of seconds needed to print (s)
  // 26 letters in alphabet half is 13 a->n 13 seconds

  let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let alphabetReversed = alphabetArray.reverse()
  let counterA = 0
  let arrayS = s.toLowerCase().split('')

  // loop through s and run each letter through the search function to get the length of time from A.
  // i can then check the time from A against the next letters Time from A subtracting them to get the new movement
  // after getting length of time from A check time going backwards.
  const letterInS = (arrayS)=>{
      arrayS.forEach((letter) =>{
          
      } )
  }
  // i need to nest this search into the forEach() above
  const search = (alphabetArray, letterInS) => {
      for (i = 0; i < alphabetArray.length; i++) {
          counterA++;
          if (alphabetArray[i] === letterInS) {
              return i;
          }
      }
      return null;
  };
  // linear search will move from a -> selected value of (s) counter will log the steps to get there,aka seconds. 
  let counterB = 0
  // reverse the array and run search again to get the negitive index and compare which is shorter and use that one???
  const searchReverse = (alphabetReversed, letterInS) => {
      for (x = 0; x < alphabetReversed.length; x++) {
          counterB++;
          if (alphabetReversed[x] === letterInS) {
              return x;
          }
      }
      return null;
  };

}