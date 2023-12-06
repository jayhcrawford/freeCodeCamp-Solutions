//This function as it's designed now, passes punctuation and spaces through into the convertedString string.
//Next I will build the if statement out to convert any letters into their respective Caesar Cipher counterpart.

function rot13(str) {
    let regAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let convertedString = "";
    let lettersRegExp = /[A-Za-z]+/;

    for (let i = 0; i < str.length; i++) {
      if (lettersRegExp.test(str[i])) {
        convertedString += str[i];
      } else {
        convertedString += str[i];
      }
    }

    console.log(convertedString);
    return convertedString;
  }
  
//console.log(rot13("SERR PBQR PNZC"));
 console.log(rot13("SERR CVMMN!"));