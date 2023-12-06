/*
This is taking care of every single case with the exception of one case. The thing that is preventing it from
testing "true" on that one case is the fact that it is "flipping" the '(' in the final phase of the test. I 
am going to create a special case for parenthesis that will take care if this.
*/

function palindrome(str) {
    let str1 = "";
    let str2 = "";
    let regExp = /\s/;
    let regExpPunct = /[^\w\s]+/;
    let regExpChar = /[\/():]+/;
    
    for (let i = 0; i<str.length; i++) {
    
    let spaces = regExp.test(str[i]);
    let alphaNumSomeChars = regExpPunct.test(str[i]);
    let specialChars = regExpChar.test(str[i]);
    
    if (specialChars == true) {
          str1 += str[i]
        }

      if (alphaNumSomeChars == false){
        if (str[i] !== '_') {
          if (spaces == false) {
          str1 += str[i].toLowerCase();
        }
        }
      }
    }

    for (let i = str1.length-1; i>=0; i--) {
      str2 += str1[i]
      }
  
    let truthChecker = true;
    for (let i = 0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    
    return truthChecker;
  }
  
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("_eye"));