//input fiels expenses function
function getOthersExpenses(othersExpenses) {
    const expensesInputField = document.getElementById(othersExpenses);
    const expensesTaka = parseFloat(expensesInputField.value);
    return expensesTaka;
}

//all players expenses function
function getAllPlayerExpenses(playersExpenses) {
    const allPlayerExpensesElement = document.getElementById(playersExpenses);
    const allPlayerExpenses = parseFloat(allPlayerExpensesElement.innerText);
    return allPlayerExpenses;
}