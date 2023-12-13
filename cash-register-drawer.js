function checkCashRegister(price, cash, cid) {
  
  //This is the register, it will be returned at the transaction:
  let register = {
    status: "OPEN",
    change: []
  };

  //this is the absolute value of change due to the customer:
  let changeDue = cash - price;

  //This will be compared at the end to assist in rounding errors:
  let finalChangeCheck = changeDue;

  //This tallies up all of the change in the register, before the transaction:
  let stuffInRegister = cid.map(inner => inner[1]);
  let totalInRegister = stuffInRegister
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  //This will check to see if there are insufficient funds based on sheer quanitity of cash:
  if (changeDue > totalInRegister) {
    register.status = "INSUFFICIENT_FUNDS"
    return register;
  }


//This series of variables and "If" statements will tally up the number of currency pieces required to give adequate change in the transaction.

//First we require zero pieces
let numHund = 0;

//We only need this piece if the amount of change due is greater than the value of an individual piece of this currency form;
//We also do not want to go into negative numbers, so the change due minus one piece must be greater than or equal to 0.
if (changeDue > 100 && changeDue - 100 >= 0){
    //"While" the number of pieces used is less than the number of pieces on hand, and the change due to customer is greater than or
    //equal to zero, we will tally up the number of currency pieces used, and subtract their total from the change due to customer.
    while (numHund < cid[8][1]/100 && changeDue -100 >= 0) {
        ++numHund;
        changeDue -= 100;
    } 
}
let numTwenties = 0;
if (changeDue > 20 && changeDue - 20 >= 0){
while (numTwenties < cid[7][1]/20 && changeDue -20 >= 0) {
      ++numTwenties;
      changeDue -= 20;
} 
}
let numTen = 0;
if (changeDue > 10 && changeDue - 10 >= 0){
    while (numTen < cid[6][1]/10 && changeDue - 10 >= 0) {
        ++numTen;
        changeDue -= 10;
} 
}
let numFive = 0;
if (changeDue > 5 && changeDue - 5 >= 0){
    while (numFive < cid[5][1]/5 && changeDue - 5 >= 0) {
        ++numFive;
        changeDue -= 5;
} 
}
let numOne = 0;
if (changeDue > 1 && changeDue - 1 >= 0){
    while (numOne < cid[4][1]/1 && changeDue - 1 >= 0) {
        ++numOne;
        changeDue -= 1;
}  
}
let numQuart = 0;
if (changeDue > .25 && changeDue - .25 >= 0){
  while (numQuart < cid[3][1]/.25 && changeDue -.25 >= 0) {
      ++numQuart;
      changeDue -= .25;
} 
}
let numDime = 0;
if (changeDue > .1 && changeDue - .1 >= 0){
    while (numDime < cid[2][1]/.1 && changeDue -.1 >= 0) {
        ++numDime;
        changeDue -= .1;
}
}
let numNick = 0;
if (changeDue > .05 && changeDue - .05 >= 0){
    while (numNick < cid[1][1]/.05 && changeDue - .05 >= 0) {
        ++numNick;
        changeDue -= .05;
} 
}
let numPenny = 0;
if (changeDue > .01 && changeDue - .01 >= 0){
    while (numPenny < cid[0][1]/.01 && changeDue - .01 >= 0) {
        ++numPenny;
        changeDue -= .01;
}    
}


//if we go through this process, and we run out of currency to render change, then we have an insufficient balance to do business.
if (changeDue > 0.01) {
    register.status = "INSUFFICIENT_FUNDS"
    return register;
}


//The array of coins given to the customer. It may/may not be placed inside the register object.
let change = [];
    
//This series of "If" Statements calculates the value of currency given for each form and pushes an array into the change array
//with the appropriate name and value.
if (numHund > 0) {
  change.push(["ONE HUNDRED", numHund * 100]);
}
if (numTwenties > 0) {
  change.push(["TWENTY", numTwenties * 20]);
}
if (numTen > 0) {
  change.push(["TEN", numTen * 10]);
}
if (numFive > 0) {
  change.push(["FIVE", numFive * 5]);
}
if (numOne > 0) {
  change.push(["ONE", numOne * 1]);
}
if (numQuart > 0) {
  change.push(["QUARTER", numQuart * .25]);
}
if (numDime > 0) {
  change.push(["DIME", numDime * .1]);
}
if (numNick > 0) {
  change.push(["NICKEL", numNick * .05]);
}

//The penny "If" is slightly different because of the prevalence of division errors. If the number is less than one penny, round it down.
if (numPenny > 0) {
  if (changeDue > 0) {
    change.push(["PENNY", (numPenny * .01) + .01]);
  } else {
    change.push(["PENNY", (numPenny * .01)]);
  }
}

  //This puts the change array into the register object.
  register.change = change;

  //This "For" Statement will calculate the total value of all cash on hand.
  let sumOfCash = 0;
  for (let i = 0; i < cid.length; i++) {
    sumOfCash += cid[i][1];
  }

  //This "If" statement will find if the amount due to the customer, and the amount that we have is equal.
  //If it is, and we've gotten this far, then we gave exact change and the shop should close.
  if (sumOfCash-finalChangeCheck === 0) {
    register.status = "CLOSED";
    change.push(["NICKEL", 0]);
    change.push(["DIME", 0]);
    change.push(["QUARTER", 0]);
    change.push(["ONE", 0]);
    change.push(["FIVE", 0]);
    change.push(["TEN", 0]);
    change.push(["TWENTY", 0]);
    change.push(["ONE HUNDRED", 0]);
  }


  //This returns the final register object with the correct information contained within!!
  return register;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))









