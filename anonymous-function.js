//1. print odd numbers in an array

// var odd = function(arr){
//     for(i=0;i<arr.length;i++){
//      if(arr[i]%2!==0){
//         console.log(arr[i])
//      }
//     }
// }
// var arr = [1,2,3,4,5,6,7,8,9,10]
// odd(arr) 

//------------------------------------------------------------------------------------------------------------------------------------------------
//2.uppercase
// Convert all the strings to title caps in a string array
// var caps = function(str){
//     console.log(str.toUpperCase())

// }
// var string=("maheshkumar");
// caps(string)

//-------------------------------------------------------------------------------------------------------------------------------------------------
//3.Sum of all numbers in an array
// var sumOfArray = function(array){
//     var sum = 0;
//     for(i=0;i<array.length;i++){
//         sum += array[i]
    
//     }
//     console.log(sum)
// }
// var arr = [1,2,3,4,5];
// sumOfArray(arr);

//-------------------------------------------------------------------------------------------------------------------------------------------------
//4.Return all the prime numbers in an array

// var prime = function(arr) {
//     let sum = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isPrime = true;
//         for (let j = 2; j < arr[i]; j++) {
//             if (arr[i] % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime && arr[i] > 1) {
//             sum.push(arr[i]);
//         }
//     }
//     console.log(...sum);
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// prime(array);
//
//-----------------------------------------------------------------------------------------------------------------------------------------------
//5. palindrome
// const isPalindrome = function(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// const findPalindromes = function(arr) {
//     const palindromes = [];
//     for (let i = 0; i < arr.length; i++) {
//         const elementAsString = String(arr[i]);

//         if (function(str) {
//             const reversedStr = str.split('').reverse().join('');
//             return str === reversedStr;
//         } (elementAsString)) {
//             palindromes.push(elementAsString);
//         }
//     }

//     return palindromes;
// }

//const inputArray = [123, 45654];
//const result = findPalindromes(inputArray);
//console.log(result);

//------------------------------------------------------------------------------------------------------------------------------------------------

//6. median of two sorted arrays of the same size. 

// var medianArray = function(arr1,arr2){

//   var combinedArray = [...arr1,...arr2];
  
//   var CenterOfarray = Math.floor(combinedArray.length / 2);
 
//   var median ;
//   if( combinedArray.length % 2 ===0){
//     median = Math.floor((combinedArray[CenterOfarray -1] + combinedArray[CenterOfarray]) / 2);

//   }else{
//     median = math.floor(combinedArray[CenterOfarray])
//   }
//    return median

//   }
  
// var array1 =[1,2,3]
// var array2 =[4,5,6]
// var results = medianArray(array1,array2)
// console.log(results)

//--------------------------------------------------------------------------------------------------------------------------------------------------
//7.remove duplicates

// var dup = function(arrs) {

//   var removeDup = new Set(arrs);
//   var reArray = Array.from(removeDup)
//   return reArray;

// } 
// var arrs = [1,2,3,4,2,4,5,7,8,5]
//  var result = dup(arrs);
//  console.log(result);

// // another type to find duplicates without using method 

//  var dup = function(arr){
//    var temp  = [];

//    for(i=0;i<arr.length;i++){

//     for(j=0;j<temp.length;i++){
//        if(arr[i]===temp[j]){
//         break;
//        }else{
//         temp.push(a[i])
//        }
//     }
     
//    }
//  return temp;

//  }
//  var array = [1,2,3,4,3,5,6,1,2];
//  var final = dup(array);
//  console.log(final);

//-------------------------------------------------------------------------------------------------------------------------------------------------

//8.Rotate an array by k times

// var rotate = function(n,arr){
//    for(i=0;i<n;i++){
//     var pop = arr.pop();
//      arr.unshift(pop);
//    }
//     return arr;

// }
// var n = 2;
// var array = [1,2,3,4,5];
// var result = rotate(n,array);
// console.log(result)
