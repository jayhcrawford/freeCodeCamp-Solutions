function chunkArrayInGroups(arr, size) {
    newArr = [];
    newArr2 = [];

    for (let i = 0; i < arr.length; i++) {
      newArr2.push(arr[i]);
    }

    return newArr;
  }





console.log(chunkArrayInGroups(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)));
console.log("This is the solution.")