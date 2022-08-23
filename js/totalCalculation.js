document.getElementById('btn-total-calculation').addEventListener('click', function () {
    const managerExpensesInputField = document.getElementById('manager-expenses');
    const managerExpensesTaka = parseFloat(managerExpensesInputField.value);
    const coachExpensesInputField = document.getElementById('coach-expenses');
    const coachExpensesTaka = parseFloat(coachExpensesInputField.value);
    const allPlayerExpensesElement = document.getElementById('all-player-expenses');
    const allPlayerExpenses = parseFloat(allPlayerExpensesElement.innerText);

    const totalExpenses = managerExpensesTaka + coachExpensesTaka + allPlayerExpenses;
    const totalExpensesElement = document.getElementById('total-expenses');
    if ((Number.isNaN(managerExpensesTaka) == false) && (Number.isNaN(coachExpensesTaka) == false)) {
        if (Math.sign(managerExpensesTaka) == 1 && Math.sign(coachExpensesTaka) == 1) {
            if (Math.sign(allPlayerExpenses) == 1) {
                totalExpensesElement.innerText = totalExpenses;
            }
            else {
                alert('You have to be honor each oh the selected player!');
            }
        }
        else {
            alert('You have to be honor the coach or the manager');
        }
    }
    else {
        coachExpensesInputField.value = '';
        managerExpensesInputField.value = '';
        alert('Enter a valid number');
    }


})