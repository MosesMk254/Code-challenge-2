// A JS function that takes an array of numbers and only returns the prime numbers

// A function that checks if number is grater than 1 is when a number can be a prime number
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// a function that get the prime numbers from an array
function getPrimeNumbers(numbers) {
  let primeNumbers = [];
  numbers.forEach((num) => {
    if (isPrime(num)) {
      primeNumbers.push(num);
    }
  });
  return primeNumbers;
}
