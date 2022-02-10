// handle deposite button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited...
    const depositeInput = document.getElementById("deposit-input");
    const depositAmount = depositeInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById("deposit-total");
    depositTotal.innerText = depositAmount;

    // cler the deposit input
    depositeInput.value = "";
  });
