const numArray = [1, 2, 3, 4, 5];

const primeNumber = (numArray) => {
    const primes = numArray.filter((number) => {
        if (number < 2) return false; // 0 and 1 are not prime numbers

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });

    console.log(primes);
};

primeNumber(numArray);



