const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

const isAllPalindromes = (arr, n) => {

    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans === false) {
            console.log(`Element at index ${i} is not a palindrome.`);
            return false;
        }
    }
    console.log("All elements are palindromes.");
    return true;
};

const result = isAllPalindromes(["level", "radar", "hello", "civic"], 4);
console.log(result);
