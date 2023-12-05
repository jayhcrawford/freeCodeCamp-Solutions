function chunkArrayInGroups(arr, size) {
    //initialize a new array to hold arrays that the for loop will create
    let newArr = [];
    let newArr2 = [];
    const arrayLength = arr.length;

    //I just turned off Copilot completions because it was actually confusing me.
    //This for loop will iterate through the array inputed into the function.
    let shifter = 0;
    let i = 0;

    do {
        if (i !== arrayLength && newArr2.length !== 0) {
          newArr2.push(arr[i]);
        } 
        
        shifter++;

        console.log("shifter: " + shifter + ", i: " + i);
        if (shifter == size) {
          newArr.push(newArr2);
          newArr2 = [];
          shifter = 0;
        }
        
        i++;
        
    }   while (i <= arr.length);
    
    

    return newArr;
  }


  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
  //console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log("This is the solution.")