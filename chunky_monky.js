  //Here is the answer. Now I will attempt to explain this function's machinations.

  function chunkArrayInGroups(arr, size) {

    //I initialize these two arrays with a wider scope than the "for" and "if" statements in order to build
    //them up, empty them at times, and have something to return at the end. 
    
    //The finalArr will never be emptied. The nestedArr will be emptied whenever the "shifter" value == the 
    //"size" value that is passed to the function as an argument.
    let finalArr = [];
    let nestedArr = [];
    let shifter = 0;

    //This for loop will iterate through every value stored in the "arr" that's passed to function chunkArrayInGroups
    //as the first argument.
    for (let i = 0; i < arr.length; i++) {
      
      //This "if" statement works in conjunction with the ++shifter increment at the bottom of the encapsulating 
      //"for" statement. Whenever shifter reaches the "size" inputted as an argument, this "if" statement will 
      //execute.
      if (shifter == size) {
        //this push(); statement pushes nestedArr in its current form into finalArr.
        finalArr.push(nestedArr);

        //this statement assigns the value of a fresh, empty array to nestedArr.
        nestedArr = [];

        //this statement pushes the current value of the argument "arr" into the freshly-empty, nestedArr.
        nestedArr.push(arr[i]);

        //this statement resets the shifter value back to 0.
        shifter = 0;

        //and we exit the "if" statement, and return to the "for" statement.


        //this else statement takes care of any cases that do not satisfy the preceding "if" statement. 
        //Basically, we need to make sure all other values get pushed into nestedArr when they need to be.
      } else {
        nestedArr.push(arr[i]);
      }  
      
      //this statement increments the shifter value, which will be incremented each time the encapsulating
      //"for" statement is iterateed.
      ++shifter;
    }



    //this final "if" statement will take care of pushing nestedArr into finalArr if it wasn't pushed into 
    //finalArr in the preceding "if" statement. Basically, the preceding statement will only ever push
    //nestedArr into finalArr if the "shifter" value == the "size" argument value.

    //This takes care of that potential condition. If the length of nestedArr == 0, than it's an empty array 
    //and we don't want it pushed into the finalArr. That would spoil the solution.
    if (nestedArr.length !== 0) {
      finalArr.push(nestedArr);
    }  
    return finalArr;
  }





  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
  console.log("This is the solution.")