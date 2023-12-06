//This isn't going to work, but I'm sure that the solution is lodged somewhere in here.

function checkCashRegister(price, cash, cid) {
    let change = cid;
    let registerObject = {
      status: "OPEN",
      change: []
    }
  
    let coinsOnHand = {
      pennies: 0,
      nickels: 0,
      dimes: 0,
      quarters: 0,
      dollars: 0,
      fives: 0,
      tens: 0,
      twenties: 0,
      hundreds: 0,
    }
  
    coinsOnHand.pennies = Number((cid[0][1]/.01).toFixed(2));
    coinsOnHand.nickels = Number((cid[1][1]/.05).toFixed(2));
    coinsOnHand.dimes = Number((cid[2][1]/.1).toFixed(2));
    coinsOnHand.quarters = Number((cid[3][1]/.25).toFixed(2));
    coinsOnHand.dollars = Number((cid[4][1]/1).toFixed(2));
    coinsOnHand.fives = Number((cid[5][1]/5).toFixed(2));
    coinsOnHand.tens = Number((cid[6][1]/10).toFixed(2));
    coinsOnHand.twenties = Number((cid[7][1]/20).toFixed(2));
    coinsOnHand.hundreds = Number((cid[8][1]/100).toFixed(2));
  
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
    
      let twenties = 0;
      for (twenties = 0; toBeGivenToCustomer > 20; twenties++) {
        toBeGivenToCustomer -= 20;
      }
  
      let tens = 0;
      for (tens = 0; toBeGivenToCustomer > 10; tens++) {
        toBeGivenToCustomer -= 10;
      }
    
      let fives = 0;
      for (fives = 0; toBeGivenToCustomer > 5; fives++) {
        toBeGivenToCustomer -= 5;
      }
    
      let singles = 0;
      for (singles = 0; toBeGivenToCustomer > 1; singles++) {
        toBeGivenToCustomer -= 1;
      }
    
      let quarters = 0;
      for (quarters = 0; toBeGivenToCustomer > .25; quarters++) {
        toBeGivenToCustomer -= .25;
      }
  
      let dimes = 0;
      for (dimes = 0; toBeGivenToCustomer > .1; dimes++) {
        toBeGivenToCustomer -= .1;
      }
     
      let nickels = 0;
      for (nickels = 0; toBeGivenToCustomer > .05; nickels++) {
        toBeGivenToCustomer -= .05;
      }
    
      let pennies = 0;
      for (pennies = 0; toBeGivenToCustomer > .01; pennies++) {
        toBeGivenToCustomer -= .01;
      }
      ++pennies;
      
      console.log("tbg pennies: " + pennies);
      console.log("tbg nickels: " + nickels);
      console.log("tbg dimes: " + dimes);
      console.log("tbg quarters: " + quarters);
      console.log("tbg singles: " + singles);
      console.log("tbg fives: " + fives);
      console.log("tbg tens: " + tens);
      console.log("tbg twenties: " + twenties);
      console.log("tbg hundreds: " + hundreds);
  
    
    registerObject.change = changeArray;
    return registerObject;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  