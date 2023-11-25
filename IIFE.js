// print odd numbers in an array

// (function(arr){
//     for(i=0;i<arr.length;i++){
//      if(arr[i]%2!==0){
//         console.log(arr[i])
//      }
//     }

// }([1,2,3,4,5,6,7,8,9,10]))


//------------------------------------------------------------------------------------------------------------------------------------------------
//uppercase


// (function(str){
//     console.log(str.toUpperCase())

// }("maheshkumar"));


//-------------------------------------------------------------------------------------------------------------------------------------------------
//Sum of all numbers in an array

// (function(array){
//     var sum = 0;
//     for(i=0;i<array.length;i++){
//         sum += array[i]
    
//     }
//     console.log(sum)
// } ([1,2,3,4,5]));


//-------------------------------------------------------------------------------------------------------------------------------------------------
//Return all the prime numbers in an array

//(function(arr) {
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
// }([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//--------------------------------------------------------------------------------------------------------------------------------------------------
//remove duplicates

//   function(arr){
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
//  console.log(temp)

//  }( [1,2,3,4,3,5,6,1,2]));
//-------------------------------------------------------------------------------------------------------------------------------------------------

//.Rotate an array by k times

// ( function(n,arr){
//    for(i=0;i<n;i++){
//     var pop = arr.pop();
//      arr.unshift(pop);
//    }
//     console.log(arr);

// } (2,[1,2,3,4,5]));

