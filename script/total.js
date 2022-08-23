document.getElementById('calculate-total-amount').addEventListener('click', function () {
    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const managerCostAmount = parseFloat(managerCostString);

    const coachCost = document.getElementById('coach-cost');
    const coachCostString = coachCost.value;
    const coachCostAmount = parseFloat(coachCostString);

    const totalCalculate = document.getElementById('calculate-total');
    const totalCalculateString = totalCalculate.innerText;
    const totalCalculateAmount = parseFloat(totalCalculateString);

    const allPlayerExpensesCost = calculate('player-expenses');

    const totalCost = allPlayerExpensesCost + managerCostAmount + coachCostAmount + totalCalculateAmount;

    totalCalculate.innerText = totalCost;

    managerCost.value = '';
    coachCost.value = '';


})