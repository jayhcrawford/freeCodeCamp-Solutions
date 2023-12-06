function palindrome(str) {
    let str1 = "";
    let str2 = "";
    let regExp = /\s/;

    //This will iterate through each character of the string argument "str" and then push it into a new string.
    for (let i = 0; i<str.length; i++) {
      
    /*
      This is really close to working. I am going to run tests to see what adjustments need to be made.
      //I know for sure that it won't test correctly on one of the examples. This algorithim skips over '/'.
      I am going to build a RegExp specifically for that character. 
    */
    let gg = regExp.test(str[i]);
      
    if (gg == false) {
        str1 += str[i];
    }
      
    }

    /*
    This will build the second string to test it against the first string.
    */

    for (let i = str1.length-1; i>=0; i--) {
      str2 += str1[i]
    }
  
    /*
    This variable truthChecker will be the return value if the string argument "str" is a palindrome.
    This if statement will check each character to test if the characters in either string are the same. If they are not, the "if" statement will return false statement and the function will end.
    */
    let truthChecker = true;
    for (let i = 0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }

  
  
    return truthChecker;
  }
  
 // palindrome("eye");
  
  //console.log(palindrome("0_0 (: /-\ :) 0-0"));
  palindrome("never odd or even")