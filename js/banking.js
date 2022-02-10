// handle deposite button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited...
    const depositeInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositeInput.value;
    const newDepositAmount = parseInt(newDepositAmountText);

    // update deposite total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    newDepositeTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositeTotal;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // cler the deposit input
    depositeInput.value = "";
  });
// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get the amount withdraw...
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseInt(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    // cler the deposit input
    withdrawInput.value = "";
  });
