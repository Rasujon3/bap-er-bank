function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBanalceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBanalceTotal + amount;
  } else {
    balanceTotal.innerText = previousBanalceTotal - amount;
  }
}

// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get the amount deposited
    // const depositInput = document.getElementById("deposit-input");
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    const depositAmount = getInputValue("deposit-input");

    // update deposit total
    // const depositTotal = document.getElementById("deposit-total");
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;

    // depositTotal.innerText = newDepositTotal;

    updateTotalField("deposit-total", depositAmount);

    // update account balance
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    // // clear the deposit input field
    // depositInput.value = "";
    updateBalance(depositAmount, true);
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");

    // set withdraw total
    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    updateTotalField("withdraw-total", withdrawAmount);

    // update balance
    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    // // clear withdraw input
    // withdrawInput.value = "";
    updateBalance(withdrawAmount, false);
  });
