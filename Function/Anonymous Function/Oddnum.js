//anonymous
let arr=[1,2,3,4,5]
function Odd(array){
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i])
          } 
     }
  }
  Odd();

  //IIFE
     (function(arr){
for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i])
          } 
     }
})([1,2,3,4])

