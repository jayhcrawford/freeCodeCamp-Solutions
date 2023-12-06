//Here is an intermediate level challenge that I am working on. 

function sumAll(arr) {
    let larger = 0;
    let smaller = 0;
    let sum = 0;
  
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
  
    let timesToSum = (larger-smaller);
    let i = 0;
    sum = smaller;
    do {
      sum += (sum + i)
      console.log(sum);
      --timesToSum;
      ++i;
    } while (timesToSum > 0);
    console.log(sum);
    
  
  
    return sum;
  }
  
  //sumAll([1, 4]);
  
  sumAll([5, 10]);