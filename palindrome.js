/*
Adding the toLowerCase(); method into my string copying "If" statement solved the problem of capital letters
in examples testing false. Now almost every example is testing true--with the exception of two examples
that both contain special characters. That should be straightforward to fix... I think. 
*/

function palindrome(str) {
    let str1 = "";
    let str2 = "";
    let regExp = /\s/;
    let regExpPunct = /[^\w\s]+/;
    
    for (let i = 0; i<str.length; i++) {
    
    let gg = regExp.test(str[i]);
    let ff = regExpPunct.test(str[i]);

    //This is the string copying "If" Statement that I mentioned in the comment at page top.
      if (ff == false){
        if (gg == false) {
        str1 += str[i].toLowerCase();
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
  console.log("The solution: " + palindrome("My age is 0, 0 si ega ym."));

