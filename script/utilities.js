

function calculate(id) {
    const playerExpenses = document.getElementById(id);
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesCost = parseFloat(playerExpensesString);
    return playerExpensesCost;
}

// function add (id){
//     document.getElementById(id).addEventListener()
    
// }