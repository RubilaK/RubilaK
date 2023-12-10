//Anonymous 
let array = [1, 2, 3, 4];

(function (arr, k) {
    k = k % arr.length;
    if (k < 0) {
        k += arr.length;
    }

    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);

    console.log(arr); // Print or return the rotated array
})(array.slice(), 2); // Passing a copy of the array to avoid modifying the original

// Define the reverse function
function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
  
    
//IIFE :  
(function(array, k) {
  k = k % array.length;
  if (k < 0) {
      k += array.length;
  }

  reverse(array, 0, array.length - k - 1);
  reverse(array, array.length - k, array.length - 1);
  reverse(array, 0, array.length - 1);

  console.log(array); // Print or return the rotated array
})([1, 2, 3, 4], 2);
function reverse(arr, start, end) {
  while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
}
