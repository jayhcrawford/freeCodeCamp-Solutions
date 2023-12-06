//This was my first instinct, but upon further examination, it will not work. 
//When the cash drawer only has pennies, for example, this function should only return pennies.

function checkCashRegister(price, cash, cid) {
    let change = cid;
    let registerObject = {
      status: "OPEN",
      change: []
    }
    let changeArray = [];
  
    let toBeGivenToCustomer = cash - price;
  
  function checkBalance(cidArray) {
    let cashOnHand = cidArray;
    let total = 0;
    for (let i = 0; i<cashOnHand.length; i++) {
      for (let j = 1; j<cashOnHand[i].length; j++) {
        total += cashOnHand[i][1];
      }
    }
    cashOnHand = (total).toFixed(2);
    return cashOnHand
  }
  
    checkBalance(change);
    if (checkBalance(change) == toBeGivenToCustomer) {
      registerObject.status = "CLOSED";
    }
    if (checkBalance(change) < toBeGivenToCustomer) {
      registerObject.status = "INSUFFICIENT_FUNDS";
    }
  
    let hundreds = 0;
    for (hundreds = 0; toBeGivenToCustomer > 100; hundreds++) {
      toBeGivenToCustomer -= 100;
    }
    changeArray.unshift(["HUNDRED", hundreds]);
  
    let twenties = 0;
    for (twenties = 0; toBeGivenToCustomer > 20; twenties++) {
      toBeGivenToCustomer -= 20;
    }
    changeArray.unshift(["TWENTY", twenties]);
  
    let tens = 0;
    for (tens = 0; toBeGivenToCustomer > 10; tens++) {
      toBeGivenToCustomer -= 10;
    }
    changeArray.unshift(["TEN", tens]);
  
    let fives = 0;
    for (fives = 0; toBeGivenToCustomer > 5; fives++) {
      toBeGivenToCustomer -= 5;
    }
    changeArray.unshift(["FIVE", fives]);
  
    let singles = 0;
    for (singles = 0; toBeGivenToCustomer > 1; singles++) {
      toBeGivenToCustomer -= 1;
    }
    changeArray.unshift(["ONE", singles]);
  
    let quarters = 0;
    for (quarters = 0; toBeGivenToCustomer > .25; quarters++) {
      toBeGivenToCustomer -= .25;
    }
    changeArray.unshift(["QUARTER", quarters]);
   
    let nickels = 0;
    for (nickels = 0; toBeGivenToCustomer > .05; nickels++) {
      toBeGivenToCustomer -= .05;
    }
    changeArray.unshift(["NICKEL", nickels]);
  
    let pennies = 0;
    for (pennies = 0; toBeGivenToCustomer > .01; pennies++) {
      toBeGivenToCustomer -= .01;
    }
    changeArray.unshift(["PENNY", pennies]);
    
    
    registerObject.change = changeArray;
    return registerObject;
  }
  
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));