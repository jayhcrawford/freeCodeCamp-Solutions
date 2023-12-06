//So this first pass is helping me to understand how simply this can be done. I think that it will be a straightforward task.

function convertToRoman(num) {
    let romNumStr = "";
    let numTester = 0;

    for (numTester = num; numTester>=1000;) {
      romNumStr += 'M';
      numTester -= 1000;
    }

    return romNumStr;
   }
   
   console.log(convertToRoman(36));
   console.log(convertToRoman(3999));
   console.log(convertToRoman(1004));
   console.log(convertToRoman(798));