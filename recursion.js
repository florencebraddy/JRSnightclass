//1. Write a JavaScript program to calculate the factorial of a number.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

//2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

let gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

//3. Write a JavaScript program to get the integers in range (x, y).

//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
  if (x === y - 2) {
    return [x + 1];
  }
  return [x + 1, range(x + 1, y)].flat();
}

//4. Write a JavaScript program to compute the sum of an array of integers.
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

//5. Write a JavaScript program to compute the exponent of a number.
//Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

//6. Write a JavaScript program to get the first n Fibonacci numbers.
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

//7. Write a JavaScript program to check whether a number is even or not.

//8. Write a JavaScript program for binary search. Go to the editor
//Sample array : [0,1,2,3,4,5,6]
//> console.log(l.br_search(5)) will return '5'

//9. Write a merge sort program in JavaScript.
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]
