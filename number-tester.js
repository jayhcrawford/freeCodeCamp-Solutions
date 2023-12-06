
//This is filtering out any characters from the input that are unrelated to the numerical characters.
function telephoneCheck(str) {
    let strSansNonNumeric = "";
    let nonNumericTester = /-()/;
  
    for (let i = 0; i<str.length ; i++) {
      if (nonNumericTester.test(str[i]) == false) {
        strSansNonNumeric += str[i];
      }
    }
    console.log(strSansNonNumeric);
    return true;
  }
  
  telephoneCheck("555-555-5555");