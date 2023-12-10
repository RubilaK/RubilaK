    
  //Anonymous Function
  function A(arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans === false) {
            return false;
        }
    }
    return true;
}

function isPalindrome(str) {
}

let array = ["level", "radar", "hello", "civic"];
let result = A(array, array.length);
console.log(result);   

//IIFE Function
(function(arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans === false) {
            console.log("Not all elements are palindromes.");
            return false;
        }
    }
    console.log("All elements are palindromes.");
    return true;
})([1, 2, 3], 3);

function isPalindrome(str) {
}
