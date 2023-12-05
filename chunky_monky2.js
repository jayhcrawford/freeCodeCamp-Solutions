//I got the answer. Here it is. Consult the original for naming changes and notes on the workings of this function.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let newArr2 = [];
  let shifter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (shifter == size) {
      newArr.push(newArr2);
      newArr2 = [];
      newArr2.push(arr[i]);
      shifter = 0;
    } else {
      newArr2.push(arr[i]);
    }   
    ++shifter;
  }

  if (newArr2.length !== 0) {
    newArr.push(newArr2);
  }  
  return newArr;
}





console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log("This is the solution.")