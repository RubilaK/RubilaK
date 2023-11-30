   /* numArray=[1,2,3,4,5];
primeNumber = (numArray) => {
               numArray = numArray.filter((number) => {
                 for (var i = 2; i <= Math.sqrt(number); i++) {
                   if (number % i === 0) return false;
                 }
                 return true;
               });
               console.log(numArray);
           }

           //numArray = [1, 2, 3, 4, 5];*/

           numArray = [1, 2, 3, 4, 5];

primeNumber = (numArray) => {
  numArray= numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}


