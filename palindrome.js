function palindrome(str) {
    let str1 = "";
    let str2 = "";
    let regExp = /\s/;
    let regExpPunct = /[^\w\s]+/;

    //This will iterate through each character of the string argument "str" and then push it into a new string.
    for (let i = 0; i<str.length; i++) {
    let gg = regExp.test(str[i]);
    let ff = regExpPunct.test(str[i]);

        /*
        gg is testing to see if the characters are letters, and ff is testing to see if they are punctuation marks.
        The lack of punctuation caused trouble for me on the previous attempt. 
        This attempt sees no change, but that is because I haven't accounted for capital letters yet. 
        */
      if (ff == false){
        if (gg == false) {
        str1 += str[i];
      }
      }
      
    }

    for (let i = str1.length-1; i>=0; i--) {
      str2 += str1[i]
      }
    console.log(str1)
    console.log(str2)
  
    let truthChecker = true;
    for (let i = 0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    
  
  
    return truthChecker;
  }
  
 // palindrome("eye");
  
  palindrome("A man, a plan, a canal. Panama");
  console.log("The solution: " + palindrome("A man, a plan, a canal. Panama"));

