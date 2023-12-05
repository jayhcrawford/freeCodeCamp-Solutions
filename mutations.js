/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */



function mutation(arr) {
    const newStr1 = arr[0].toLowerCase();
    const newStr2 = arr[1].toLowerCase(); 
    var gg = undefined;
  
    for (let i = 0; i < arr[1].length; i++) {
      gg = new RegExp(newStr2[i]);
      console.log(gg);
      var bb = gg.test(newStr1);
      
      if (bb == false) {
        return false;
      }
  }
  return true;
  }
  