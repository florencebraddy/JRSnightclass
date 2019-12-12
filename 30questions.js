//1) Write a function that displays the result of 5+6+7+8+9+10.

function display(){
    return 5 + 6 + 7 + 8 + 9 + 10   
   }

   console.log(display())

//2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.//

function perimeter5And8 (){
    return 5+5+8+8
}

console.log (perimeter5And8 ())

//3) Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.


function perimeter (width, height){
    return 2 * (width + height)
}

console.log (perimeter (5,8))

console.log (perimeter (1,1))

//4) Write a function that converts fahrenheit, given as an argument, to celcius.
function convertToCelcius(f) {
    return (5/9) * (f-32);
    }

console.log (convertToCelcius (80))

//5) Write a function that converts celcius, given as an argumen, to fahrenheit.

function convertToFareinheight (c) {
    return ((c * 9/5) + 32)
    }

    console.log (convertToFareinheight (34))

//6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.
function myTip (bill,percentage) {
    return bill/100 * percentage 
    }

    console.log (myTip ().toFixed())

//7) Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26. 

function sumDigits(digits){
    var digitArray = [];
    var digitToString = digits.toString();
    var sum = 0;
    for (var i=0; i<digitToString.length; i++){
    sum += Number(digitToString[i]); 
    }
    return sum;
}
 console.log (sumDigits())

//8) Write the same function above, but that takes an input from the built-in browser function, prompt().

function sumDigits(){
    var digits = prompt();
    var digitArray = [];
    var digitToString = digits.toString();
    var sum = 0;
    for (var i=0; i<digitToString.length; i++){
    sum += Number(digitToString[i]); 
    }
    return sum;
}

console.log (sumDigits())

// 9) Write a function that takes an argument in seconds and specifies the equivalent number of years.

function secondToYears (seconds){
var seconds = 0;
var secondsArray = [];




}
return years:




}

10) Write a function that returns the current date and time.

11) Write a function that returns the date 33 days from now.

12) Write a function that returns the mean of an array of numbers.



13) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month. (Hint: Look up how to get a random number in JavaScript.)

function randomNumber (lower,upper){
    var x = Math.floor(Math.random(1)*12);
    const months = ["Jan","Feb", "March", "April","May","June","July","August","September","October","November","December"]
    return months + x;
} 
console.log (1,12)



14) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).
15) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.
16) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.
17) Write a function called isEven() that returns true if a given argument is even.
18) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.
19) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...
20) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.
21) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.
22) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).
23) Write a function that returns the largest integer n where n*n is still less than a given argument.
Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 
24) Write a function that takes a string as an argument and returns the reverse of that string.
25) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.
26) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]
27) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. (i.e. each element in the array is less than or equal to the next element.)
28) Write a function that takes an array of numbers as an argument and sorts them in increasing order.
29) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge().
30) Leibniz's formula can compute pi. the formula is given below:
pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
The elipsis (the three dots) means this pattern continues forever.
Notice that the operators ( + and - ) alternate each time.
Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1/9) in this case.
