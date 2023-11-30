array=[5,5,5]
sum = (array)=>{
    var result = 0;
         for(var i = 0 ; i< array.length ; i++){
            result = result + array[i];
          }
          return result;
          }
          console.log(sum(array))
