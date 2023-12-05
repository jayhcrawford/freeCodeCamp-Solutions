function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let newArr2 = [];
  let shifter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (shifter == size) {
      newArr.push(newArr2);
      newArr2 = [];
      shifter = 0;
    }
    newArr2.push(arr[i]);
    
    console.log("This is what's in the solution array:")
    console.log(newArr);
    ++shifter;
    console.log("shifter: " + shifter);
    console.log("i is: " + i);

  }

  return newArr;
}





console.log(chunkArrayInGroups(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)));
console.log("This is the solution.")