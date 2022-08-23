document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player');
    const perPlayerString = perPlayer.value;
    const perPlayerCost = parseFloat(perPlayerString);

    const totalPlayersCost = perPlayerCost * 5;

    // const playerExpenses = document.getElementById('player-expenses');
    // const playerExpensesString = playerExpenses.innerText;
    // const playerExpensesCost = parseFloat(playerExpensesString);

    const playerExpenses = document.getElementById('player-expenses');

    const allPlayerExpensesCost = calculate('player-expenses');

    const allPlayerCost = allPlayerExpensesCost + totalPlayersCost;

    playerExpenses.innerText = allPlayerCost;

    perPlayer.value = '';
})