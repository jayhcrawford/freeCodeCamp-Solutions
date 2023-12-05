//This feels like it's getting much closer to the solution.

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
      console.log(newArr2)
    }
    
    console.log("i is: " + i);
    ++shifter;
    console.log("shifter: " + shifter);
    

  }

  //console.log("This is what's in the nested array:")
  //console.log(newArr2);
    

  return newArr;
}





console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log("This is the solution.")