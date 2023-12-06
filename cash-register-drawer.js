//The nested-function checkBalance will return the total balance of the cash on hand in whatever array is inputted
//into it.

function checkCashRegister(price, cash, cid) {
    let change = cid;
    let totalCashOnHand = 0;
  
  function checkBalance(cidArray) {
    let cashOnHand = cidArray;
    let total = 0;
    for (let i = 0; i<cashOnHand.length; i++) {
      for (let j = 0; j<cashOnHand[i].length; j++) {
        total += cashOnHand[i][1];
      }
    }
    cashOnHand = (total).toFixed(2);
    return cashOnHand
  }
    checkBalance(change);
  
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));