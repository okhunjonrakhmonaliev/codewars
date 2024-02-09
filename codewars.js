// 1-masala

// function evenOrOdd(number) {
//     return   number % 2 === 0 ? "Even" :"Odd";

//     }

//////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////

// 4-masala

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 1.way
// function solution(str){
//     let revstr = '';
//     for (let i = s.length - 1; i >= 0; i--)
//       revstr += s[i];
//     return revstr;
//   }

// 2.way
// function solution(str){
//     return str.split('').reverse().join('');
//   }

//   3.way
//   const solution = s => [...s].reverse().join('')

//   4.way
//   function solution(str){
//     let n = ''
//     for(let i of str){
//       n = i+n
//     }
//     return n
//   }

//   5.way
//   function solution(str){
//     return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
//   }

////////////////////////////////////////////////////////////////////

// 5 - masala

// Complete the method that takes a boolean value and
//  return a "Yes" string for true, or a "No" string for false.

//  function boolToWord( bool ){
//     return bool === true ? "Yes" : "No";
//   }

//////////////////////////////////////////////////////////////////////

// 6 - masala

// 1.way

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     return num.toString();
//   }

// 2.way
//   function numberToString(num) {
//     // Return a string of the number here!
//     return String(num);
//   }

// 3.way
//   const numberToString = num => `${num}`;

////////////////////////////////////////////////////

// 7 - masala;

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// 1.way

// function opposite(number) {
//     return number > 0 ? -number : Math.abs(number);
//   }

//   2.way

// function opposite(number) {
//     return number * (-1);
// }

// 3.way

//   function opposite(number) {
//     if(number > 0){
//       return -Math.abs(number)
//     } else {
//       return Math.abs(number)
//      }
//   }

///////////////////////////////////////////////

// 8 - masala

// It's pretty straightforward. Your goal is to create a function that removes the first 
// and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry about strings with less than two characters.

// 1.way

// function removeChar(str){
//     return str.slice(1, str.length - 1);
//   };
  
// 2.way
//     function removeChar(str){
//         return str.substring(1, str.length-1);
//        };
       
////////////////////////////////////////////////////////

// 9 - masala

// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

////////////////////////////////////////////////////////////

// 10 - msala 

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0. 
//  Your function only needs to return the result, what is shown between parentheses in the example 
//  below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++){
//       count += i;
//     }
//     return count;
//   }

/////////////////////////////////////////////////////////////////////

// 11 - masala

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// 1.way
// function noSpace(x){
//     return x.replace(/ /g, ''); 
//     }

//  2.way
//  function noSpace(x){
//     var result = ""
//     for(var index = 0; index < x.length; index++){
//       if(x[index] !== " "){
//         result += x[index];
//       }
//     }
//     return result;
//   }   

//////////////////////////////////////////////////////////

// 12 - masala

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        args.sort((a,b) => a-b);
//      return args[0]
//     }
//   }