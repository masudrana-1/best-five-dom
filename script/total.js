document.getElementById('calculate-total-amount').addEventListener('click', function () {
    const managerCost = document.getElementById('manager-cost');

    // const managerCostString = managerCost.value;
    // const managerCostAmount = parseFloat(managerCostString);

    const coachCost = document.getElementById('coach-cost');

    // const coachCostString = coachCost.value;
    // const coachCostAmount = parseFloat(coachCostString);

    // const totalCalculate = document.getElementById('calculate-total');
    // const totalCalculateString = totalCalculate.innerText;
    // const totalCalculateAmount = parseFloat(totalCalculateString);

    const managerAmount = allCost('manager-cost');

    const coachAmount = allCost('coach-cost');

    const totalCalculate = document.getElementById('calculate-total');
    const totalCalculateString = totalCalculate.innerText;
    const totalCalculateAmount = parseFloat(totalCalculateString);


    const allPlayerExpensesCost = playerExpensesCalculate('player-expenses');

    const totalCost = allPlayerExpensesCost + managerAmount + coachAmount + totalCalculateAmount;

    totalCalculate.innerText = totalCost;

    managerCost.value = '';
    coachCost.value = '';


})