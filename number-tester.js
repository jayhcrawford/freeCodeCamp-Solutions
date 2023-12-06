
//So this is passing 90% of the test cases, but the cases that are failing are all weird, and I'm gonna have to get nitty gritty, just for them.
//For now I want to take a break.
function telephoneCheck(str) {
    let strSansNonNumeric = "";
    let nonNumericTester = /[-!*&#a-zA-Z()]/;
  
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

    if (strSansNonNumeric.length == 10) {
      return true;
    }
    if (strSansNonNumeric.length == 11) {
      if (strSansNonNumeric[0] !== '1') {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
  
