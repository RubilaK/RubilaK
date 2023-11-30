//Anonymous Function 
let arr=[1,1,2,3,4,2];

function num(array){
    let dup = [...new Set(arr)];
    console.log(dup);

  }


  num();
//IIFE 
           (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4,2])
