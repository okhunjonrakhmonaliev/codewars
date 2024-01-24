

// 1-masala

// function evenOrOdd(number) {
//     return   number % 2 === 0 ? "Even" :"Odd";
      
//     }

///////////////////////////////////////////////

// 2 - masala

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     return -Math.abs(num);
//  }
 
////////////////////////////////////////////////

// 3 - masala

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// 1.way
// function positiveSum(arr) {
//     filtered = arr.filter((value) => value > 0 );
//     return filtered.reduce((a,b) => a+b, 0 )
   
//   }

// 2.way
// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i ++) {
//         if(arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
  
// 3.way
// function positiveSum(arr) {
//     return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0);
// }
  










