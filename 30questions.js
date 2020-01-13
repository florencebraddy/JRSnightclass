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
    return (5/9) * (f-32)
    }

console.log (convertToCelcius (43))

//5) Write a function that converts celcius, given as an argumen, to fahrenheit.

function convertToFareinheight (c) {
    return ((c * 9/5) + 32)
    }

    console.log (convertToFareinheight (20))

//6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.
function myTip (bill,percentage) {
    return bill/100 * percentage 
    }

    console.log (myTip (56,87.20).toFixed())

//7) Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26. 

function sumDigits(digits){
    var digitArray = [];
    var digitToString = digits.toString();
    var sum = 0;
    for (var i=0; i<digitToString.length; i++){
    sum += Number(digitToString[i]); 
    }
    return sum
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
    return sum
}

console.log (sumDigits())

// 9) Write a function that takes an argument in seconds and specifies the equivalent number of years.

function secondConvert(seconds) {

    var yearConvertArray = seconds / 31536000;
    var stringyearConvertArray = yearConvertArray.toString();
    var yearAmount = stringyearConvertArray.charAt(0);

    return yearAmount;
}
console.log("years = " + secondConvert());


//10) Write a function that returns the current date and time.

function currentDateTime (){
    return new Date();
}
console.log (currentDateTime ())

//11) Write a function that returns the date 33 days from now.

function futureDate (date){
    var date = new Date();
    date.setDate(33);
    return date;
}

console.log (futureDate())

//12) Write a function that returns the mean of an array of numbers.

function meanArray(numbers){
    var numbersArray = [];
    var numbersToString = numbers.toString();
    var sum = 0;
    for (var i=0; i < numbersToString.length; i++){  
    sum += Number(numbersToString[i]); 
    }
    var meanNumbers = sum/numbersToString.length;
    return meanNumbers
}

console.log (meanArray(888))


// 13) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month. (Hint: Look up how to get a random number in JavaScript.)

function randomMonth (){
const months = ["Jan","Feb", "March", "April","May","June","July","August","September","October","November","December"];
var randomNumber= Math.floor(Math.random(1)*12);
var correspondingMonth = months [Math.floor(Math.random(1)*12)];
return correspondingMonth
}
 console.log(randomMonth())


//14) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

function orderNumbers (a,b,c){
var numberArray = [4,1,0];
var numbersToString = numberArray.toString();
var sum = 0;
        for (var i=0; i < numbersToString.length; i++){  
        sum += Number(numbersToString[i]); 
        }
        var increasingOrder = numberArray.sort();
        numberArray.sort(function(a, b){return a - b});
        
return numberArray;
}

    console.log (orderNumbers ())

//15) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

function isPalindrone (input){
    var cleanInput = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var firstArray = [];
    var wordArrayOriginal = [];
    for (var i=0; i<cleanInput.length; i++){
        firstArray[i]= cleanInput.charAt(i);     
  }

  for (var i=0; i<cleanInput.length; i++){
    wordArrayOriginal[i]= firstArray[i];   
  {
    var reversedArray = firstArray.reverse();
  }
for (var i=0; i<firstArray.length; i++){
    if (wordArrayOriginal[i] != reversedArray[i])
   {
        return false;
}
return true;
}
}
}

console.log (isPalindrone("Hello"))

console.log (isPalindrone("racecar"))

//16) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
//Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.

function isCoerced (a,b){
    if (a == b)
{
return true;
}
    return false;

}

console.log (isCoerced ()) 


//17) Write a function called isEven() that returns true if a given argument is even.

function isEven(number){
    if (number%2 == 0)
		return true;

 else 

 return false; 
} 

console.log (isEven())


//18) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.

function isOdd(number){
    if (isEven (number)){
		return false;
    }
        else{ 
return true;
}

} 

console.log (isOdd())

//19) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...

function multipleOfThree (input){
if (input%3 == 0)
return true;

    else{
return false;
}
console.log (multipleOfThree())


//20) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
//Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.

function multiple (input1, input2){
    if (input1%input2 == 0)
    return true;
    
    else 
    return false;
    
}
    
console.log (multiple())

//21) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.

function smallestNumber(numbers){
    return Math.min.apply(Math, numbers);
}

console.log (smallestNumber(numbers))


//22) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).

function largestInteger (){
    var limit = 12000;
    var n= 0;
    while ((n*n) < limit){
        n++;
    }
    return n - 1;
    }

    console.log (largestInteger())

//23) Write a function that returns the largest integer n where n*n is still less than a given argument.
//Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 

function smallestN(number){
    var n= 0;
    while ((n*n) < number){
        n++;
    }
    return n - 1;
    }

console.log (smallestN())

//24) Write a function that takes a string as an argument and returns the reverse of that string.

function reverse (string){
    var splitString = string.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");

return joinString

}

console.log (reverse())

//25) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
//For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.

function countOccurences (value){
var elementArray = [5,7,12,5,3,3,5];
var occurences = 0;
for (var i=0; i<elementArray.length; i++){
if(value == elementArray[i]){
occurences++;
}
}
return occurences;
}

console.log (countOccurences())


//26) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
//For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]

function multi() {
    var multiArray = [];
    var numbersSeen = [];
    for (var i = 0; i < Thisarray.length; i++) {
        var amount = countOccurencesArrayPassed(([Thisarray[i]]),testArray);
        if(!numbersSeen.includes(Thisarray[i])){
            numbersSeen.push(Thisarray[i]);
            multiArray.push([(Thisarray[i]), amount]);
        }
    }
    return multiArray;
}

console.log(multi())

function countOccurencesArrayPassed(number,arrayPassed) {
    var array = arrayPassed;
    var occurences = 0;
    for (var i = 0; i < array.length; i++) {
        if ((array[i]) == number) {
            occurences++;
        }
    }
    return occurences;
}

//27) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. (i.e. each element in the array is less than or equal to the next element.)

function isSorted (numbers){
    var numberArray = [3,4,6,3,2,2]
    for (var i=0; i < numbers.length- 1; i++){  

        if (numbers[i+1] <= numbers [i]){
            return false;
        }
return true;
}
}
console.log (isSorted(numberArray))


//28) Write a function that takes an array of numbers as an argument and sorts them in increasing order.

function increasingOrder(numbers){
    for (var i=0; i < numbers.length; i++){  
        numbers.sort(function(a, b){return a - b});
}        return numbers;
}
console.log (increasingOrder())

//29) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge().

function merge(firstArray,secondArray){
    var sortedArray = []
    sortedArray=firstArray.concat(secondArray)
    increasingOrder(sortedArray);
    return sortedArray;
}

console.log (merge(firstArray,secondArray))


//30) Leibniz's formula can compute pi. the formula is given below:
//pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
//The elipsis (the three dots) means this pattern continues forever.
//Notice that the operators ( + and - ) alternate each time.
//Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
//Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1/9) in this case.


function calculatePI(number) {
    var pi = 1;
    for (i = 0; i < number; i++) {
        var denominator = i * 2 + 3;
        if (i % 2 == 0) {
            pi -= (1 / denominator);
        } else {
            pi += (1 / denominator);
        }
    }
    pi *= 4;
    return pi;
}

console.log(calculatePI())