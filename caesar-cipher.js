/*
This one was the easiest project so far. 

I've commented an explanation.
*/


function rot13(str) {

    //this convertedString will be added up to the decoded message one character at a time in the proceeding "For" statement.
    let convertedString = "";

    //This RegEx will test true if it encounters any character that is alphabetical.
    let lettersRegExp = /[A-Za-z]+/;

    //This "For" statement will iterate through every character in the string argument "str".
    for (let i = 0; i < str.length; i++) {

    //If this "If" statement is satisfied, then the character will go through the proceeding "Switch" statement
    //where it will be converted to whatever character is appropriate in the cipher.
      if (lettersRegExp.test(str[i])) {
        switch(str[i]) {
          case 'A':
            convertedString += 'N';
            break;
          case 'B':
            convertedString += 'O';
            break;
          case 'C':
            convertedString += 'P';
            break;
          case 'D':
            convertedString += 'Q';
            break;
          case 'E':
            convertedString += 'R';
            break;
          case 'F':
            convertedString += 'S';
            break;
          case 'G':
            convertedString += 'T';
            break;
          case 'H':
            convertedString += 'U';
            break;
          case 'I':
            convertedString += 'V';
            break;
          case 'J':
            convertedString += 'W';
            break;
          case 'K':
            convertedString += 'X';
            break;
          case 'L':
            convertedString += 'Y';
            break;
          case 'M':
            convertedString += 'Z';
            break;
          case 'N':
            convertedString += 'A';
            break;
          case 'O':
            convertedString += 'B';
            break;
          case 'P':
            convertedString += 'C';
            break;
          case 'Q':
            convertedString += 'D';
            break;
          case 'R':
            convertedString += 'E';
            break;
          case 'S':
            convertedString += 'F';
            break;
          case 'T':
            convertedString += 'G';
            break;
          case 'U':
            convertedString += 'H';
            break;
          case 'V':
            convertedString += 'I';
            break;
          case 'W':
            convertedString += 'J';
            break;
          case 'X':
            convertedString += 'K';
            break;
          case 'Y':
            convertedString += 'L';
            break;
          case 'Z':
            convertedString += 'M';
            break;
        }

    /*
    if the preceding "If" statemnent did not test true, then that means whatever character was at that index[i]
    of the string was not alphabetical, and the following else statement will append the character, whatever
    it may be, to the convertedString in its appropriate place.
    */
      } else {
        convertedString += str[i];
      }
    }

    //this will return the decoded string--or encoded string! Whichever you decide to input.
    return convertedString;
  }
  
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));