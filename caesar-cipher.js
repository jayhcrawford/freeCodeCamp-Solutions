/*
Here is another assignment that ChatGPT can probably do in 5 seconds. It's still fun to do it myself though.


Here is the prompt:
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
(close prompt)


This one is similar to the Caesar Cipher that I did in CS50, except it will be easier.
The C programming language gave me way more difficulty when dealing with strings and integers--something that 
Javascript does not do at all! Hahahaha. Absolutely no pointers or wacky characters are involved.
*/


function rot13(str) {
    return str;
  }
  
  rot13("SERR PBQR PNZC");