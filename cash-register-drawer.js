//This is already satisfying 3 of 5 parameters. 

function checkCashRegister(price, cash, cid) {
    let change = cid;
    let registerObject = {
      status: "OPEN",
      change: []
    }
  
    console.log(registerObject)
  
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
    if (checkBalance(change) < cash) {
      registerObject.status = "INSUFFICIENT_FUNDS"
    }
  
    return registerObject;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);