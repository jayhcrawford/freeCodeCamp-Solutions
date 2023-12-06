/*
I abandoned the previous way that I was thinking about this and adopted an array based method.

Here is the prompt: 
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers 
between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) 
is 10.
(close prompt)

Here is a quick explanation.
*/

function sumAll(arr) {
    //The argument entered is an array, and I first have to find out which number is higher. These variables give me a place to start.
    let larger = 0;
    let smaller = 0;

    //I initialize sum to 0 to store the sum that I will add up later.
    let sum = 0;

    //This empty array will hold every number in between the smaller number and the larger number (both inclusive)
    let arrayOfNum = [];
  
    //The following "If" statements will assign values to the larger and smaller variables.
    if (arr[0] > arr[1]) {
      larger = arr[0];
      smaller = arr[1];
    }
    if (arr[1] > arr[0]) {
      larger = arr[1];
      smaller = arr[0];
    }
    if (arr[1] == arr[0]) {
      return "These numbers are the same."
    }
  
    //This "Do" statement will push each value in the range into the empty array "arrayOfNum" in order.
    let checker = 0;
    do {
      arrayOfNum.push(smaller+checker);
      ++checker;
    } while (checker <= (larger-smaller));
    
    //This "For" statement will add up each array element and store that sum in "sum".
    for (let i = 0; i<arrayOfNum.length; i++) {
      sum += arrayOfNum[i];
    };
  
    return sum;
  }
  
  //sumAll([1, 4]);
  
  sumAll([5, 10]);