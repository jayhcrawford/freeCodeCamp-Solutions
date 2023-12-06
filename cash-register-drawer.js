//First I'm creating a nested function that will be able to calculate the balance of the cash on hand.
//It will calculate it before and after any transaction, and return the appropriate sum when necessary.

function checkCashRegister(price, cash, cid) {
    let change = cid;
    let totalCashOnHand = 0;
  
  function checkBalance(cidArray) {
    let cashOnHand = cidArray;
    for (let i = 0; i<cashOnHand.length; i++) {
      for (let j = 0; j<cashOnHand[i].length; j++) {
        console.log(cashOnHand[i][j]);
      }
    }
    return cashOnHand
  }
    checkBalance(change);
  
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));