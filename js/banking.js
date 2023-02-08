function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount = parseFloat(inputText);

    inputField.value = '';
    return inputAmmount;

}

function updateTotal(updateId, newDipositAmmount) {
    const depositTotlal = document.getElementById(updateId);
    const priviousDepositText = depositTotlal.innerText;
    const priviousDepositAmmount = parseFloat(priviousDepositText);

    depositTotlal.innerText = priviousDepositAmmount + newDipositAmmount;
}


function getCurrentBalance() {
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    return balanceTotalAmmount;
}

function balanceUpdate(ammount, isAdd) {
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalAmmount = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmmount + ammount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmmount - ammount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const newDipositAmmount = getInput('deposit-input');
    if (newDipositAmmount > 0) {
        updateTotal('deposit-total', newDipositAmmount);
        balanceUpdate(newDipositAmmount, true)
    }


})

document.getElementById('withdra-button').addEventListener('click', function () {
    const newWithdrawAmmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (newWithdrawAmmount > 0 && newWithdrawAmmount <= currentBalance) {
        updateTotal('withdraw-total', newWithdrawAmmount);
        balanceUpdate(newWithdrawAmmount, false)
    }

})
