//Anonymous Function
let arr = [1, 1, 2, 3, 4, 2];

(function(arr) {
  let dup = [...new Set(arr)];
  console.log(dup);
})(arr);


//IIFE 
           (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4,2])
