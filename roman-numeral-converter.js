//This project was relatively easy. But I think that ease came from having some knowledge from CS50. 


function convertToRoman(num) {
    //This string is where the Roman numerals will be added. Because they read from left to right, it's pretty simple to convert integers into Roman numerals.
    let romNumStr = "";

    //This numTester value will be used to first, hold the value of the "num" argument, and then it will 
    //subsequently be decremented as new characters are added to the romNumStr variable in the following "For" statements.
    let numTester = 0;

    //Each one of these "For" statements will add their corresponding Roman numeral, and subtract the decimal value from
    //the numTester value, until the "For" loop conditions are no longer satisfied. 
    for (numTester = num; numTester>=1000;) {
      romNumStr += 'M';
      numTester -= 1000;
    }
    for (numTester; numTester>=900;) {
      romNumStr += 'CM';
      numTester -= 900;
    }
    for (numTester; numTester>=500;) {
      romNumStr += 'D';
      numTester -= 500;
    }
    for (numTester; numTester>=400;) {
      romNumStr += 'CD';
      numTester -= 400;
    }
    for (numTester; numTester>=100;) {
      romNumStr += 'C';
      numTester -= 100;
    }
    for (numTester; numTester>=90;) {
      romNumStr += 'XC';
      numTester -= 90;
    }
    for (numTester; numTester>=50;) {
      romNumStr += 'L';
      numTester -= 50;
    }
    for (numTester; numTester>=40;) {
      romNumStr += 'XL';
      numTester -= 40;
    }
    for (numTester; numTester>=10;) {
      romNumStr += 'X';
      numTester -= 10;
    }
    for (numTester; numTester>=9;) {
      romNumStr += 'IX';
      numTester -= 9;
    }
    for (numTester; numTester>=5;) {
      romNumStr += 'V';
      numTester -= 5;
    }
    for (numTester; numTester>=4;) {
      romNumStr += 'IV';
      numTester -= 4;
    }
    for (numTester; numTester>=1;) {
      romNumStr += 'I';
      numTester -= 1;
    }

    //The function will return the romNumStr with the appropriate characters in order.
    return romNumStr;
   }
   
   console.log(convertToRoman(36));
   console.log(convertToRoman(3999));
   console.log(convertToRoman(1004));
   console.log(convertToRoman(798));