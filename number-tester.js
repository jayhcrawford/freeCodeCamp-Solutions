/*
Here is the solution to the Number Tester challenge. Programming for some of the more esoteric cases seemed 
a little bit like cheating. For example, I made a test that would fail a phone number with 1 parenthesis or more than two parenthesis.
I also made a test that would check to see if the number started with a hyphen, and return false if so. 
Those cases felt a little bit outlandish. 

*/


function telephoneCheck(str) {

  //This will later contain the number inputted in the string argument "str" but without non-numerical characters.
  let strSansNonNumeric = "";

  //This is filtering out any characters from the input that are unrelated to the numerical characters.
  let nonNumericTester = /[-!*&#a-zA-Z()]/;

  //Both of these RegExs will be used later on in special cases to check for either too many parenthesis, too few,
  // and whether or not the telephone number begins with a hyphen.... ha.
  let hyphenTester = /[-]/;
  let parenthTester = /[()]/;

  //This test is exclusively for hyphens. This will test to see if there are more than two hyphens, and return false if so.
  let numOfHyphens = 0;
  for (let i = 0; i<str.length; i++) {
    if (hyphenTester.test(str[i])) {
      ++numOfHyphens;
    }
  }
  if (numOfHyphens > 2) {
    return false;
  } 

  //This test is exclusively for parenthesis. If there are either 1 or more than two parenthesis, it will return false.
  let numOfParenthesis = 0;
  for (let i = 0; i<str.length; i++) {
    if (parenthTester.test(str[i])) {
      ++numOfParenthesis;
    }
  }
  if (numOfParenthesis !== 0 && (numOfParenthesis > 2 || numOfParenthesis < 2)) {
    return false;
  } 

  //This test is exclusively for the beginning character being a hyphen.
  if (str[0] == '-') {
    return false;
  }

  //This test is exclusively for the final character being a parenthesis.
  let regExpParenth2 = /\)$/;
  if (regExpParenth2.test(str) == true) {
    return false;
  }



//This "For" statement will append each numerical character of the string argument "str" to the empty string "strSansNonNumeric".
  for (let i = 0; i<str.length ; i++) {
    if (nonNumericTester.test(str[i]) == false) {
      if (str[i] == ' ') {
        continue;
      } else {
      strSansNonNumeric += str[i];
      }
    }
  }
  console.log(strSansNonNumeric);

  //If it turns out that all special character tests are passed, then this test will test the number's length. 10 digits is acceptable.
  if (strSansNonNumeric.length == 10) {
    return true;
  }

  //This test will check whether or not a number which is eleven digits starts with a one. If it doesn't start with a one,
  // it has an unacceptable nation code. If it is eleven characters and starts with anything else it will return false.
  if (strSansNonNumeric.length == 11) {
    if (strSansNonNumeric[0] !== '1') {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

console.log(telephoneCheck("55 55-55-555-5"));