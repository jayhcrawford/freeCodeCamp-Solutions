/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    //initialize a new array to hold arrays that the for loop will create
    let newArr = [];
    let newArr2 = [];

    //I'm adding these variables to manipulate in the Do - While Loop.
    let shifter = 0;
    let i = 0;

    //This is getting me close to finding the result.
    do {
        newArr2.push(arr[i]);
        ++shifter;
        console.log("The array is at: " + newArr2);
        console.log(shifter);
        i++;
        if (shifter == size) {
          console.log("time to start again");
          //newArr2.push(newArr2);
          newArr2 = [];
          shifter = 0;
        }
        console.log(newArr2);

    }   while (i < arr.length);

    return newArr;
  }

  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);


  //chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]


  //----------my initial instincts pointed me to this answer;
  //------------The final array is of length 1. I think I will need a for loop.
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]