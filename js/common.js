//input fiels expenses function
function getOthersExpenses(othersExpenses) {
    const expensesInputField = document.getElementById(othersExpenses);
    const expensesTaka = parseFloat(expensesInputField.value);
    if (Number.isNaN(expensesTaka) == false && Math.sign(expensesTaka) == 1) {
        return expensesTaka;
    }
    else {
        alert('You have to be honor the coach or the manager');
    }

}

//all players expenses function
function getAllPlayerExpenses(playersExpenses) {
    const allPlayerExpensesElement = document.getElementById(playersExpenses);
    const allPlayerExpenses = parseFloat(allPlayerExpensesElement.innerText);
    if (Math.sign(allPlayerExpenses) == 1) {
        return allPlayerExpenses;
    }
    else {
        alert('You have to be honor each oh the selected player!');
    }

}