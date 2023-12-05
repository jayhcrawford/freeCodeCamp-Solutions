/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    //initialize a new array to hold arrays that the for loop will create
    let newArr = [];

    //I just turned off Copilot completions because it was actually confusing me.
    //This for loop will iterate through the array inputed into the function.
    for (let i = 0; i < size.length; i++) {

    }


    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);


  //chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]


  //----------my initial instincts pointed me to this answer;
  //------------The final array is of length 1. I think I will need a for loop.
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]