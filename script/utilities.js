

function playerExpensesCalculate(id) {
    const playerExpenses = document.getElementById(id);
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesCost = parseFloat(playerExpensesString);
    return playerExpensesCost;
}

function allCost(id) {
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}
