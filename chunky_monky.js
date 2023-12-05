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

    //This does not work. I thought that using a shifter to close the current array, and then pushing that array into the other new array would work.
    do {
        newArr2.push(arr[i]);
        ++shifter;
        if (shifter == size) {
          newArr.push([newArr2]);
          newArr2 = [];
        }
    console.log(newArr2);
        i++;
    }   while (i < arr.length);

    return newArr;
  }

  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);


  //chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]


  //----------my initial instincts pointed me to this answer;
  //------------The final array is of length 1. I think I will need a for loop.
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]