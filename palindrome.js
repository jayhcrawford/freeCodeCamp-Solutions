/*

This is one of the final projects for the freeCodeCamp certification. I am going to start working on it. 
I want to show my process, and write as I am finding the solution.

Here is the prompt:

Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
(close) prompt
*/


/*
The examples that should pass are showing me that I will need to include special characters in my checking 
method.
for example: 
"palindrome("0_0 (: /-\ :) 0-0") should return true."
/*

/*
My initial instinct is to create a new string from the inputted string, without any spaces. 
Then flip that "no-spaces" string into another string. Then compare the two strings, and 
return true if it's a palindrome. 
*/


function palindrome(str) {
    let str1 = str;
    let str2 = "";
  
    
  
  
    return str2;
  }
  
  palindrome("eye");
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));

