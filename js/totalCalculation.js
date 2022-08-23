
document.getElementById('btn-total-calculation').addEventListener('click', function () {
    //manager expenses
    const managerExpensesTaka = getOthersExpenses('manager-expenses');

    //coach expenses
    const coachExpensesTaka = getOthersExpenses('coach-expenses');
    
    //all player expenses
    const allPlayerExpensesTaka = getAllPlayerExpenses('all-player-expenses');

    //total expenses
    const totalExpenses = managerExpensesTaka + coachExpensesTaka + allPlayerExpensesTaka;
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses;
})