
document.getElementById('btn-total-calculation').addEventListener('click', function () {
    //manager expenses
    const managerExpensesTaka = getOthersExpenses('manager-expenses');

    //coach expenses
    const coachExpensesTaka = getOthersExpenses('coach-expenses');

    //all player expenses
    const allPlayerExpensesTaka = getAllPlayerExpenses('all-player-expenses');

    //total expenses
    const totalExpensesElement = document.getElementById('total-expenses');
    if ((Number.isNaN(managerExpensesTaka) == false) && (Number.isNaN(coachExpensesTaka) == false)) {
        if (Math.sign(managerExpensesTaka) == 1 && Math.sign(coachExpensesTaka) == 1) {
            if (Math.sign(allPlayerExpensesTaka) == 1) {
                const totalExpenses = managerExpensesTaka + coachExpensesTaka + allPlayerExpensesTaka;
                totalExpensesElement.innerText = totalExpenses;
            }
            else {
                alert('You have to be honor each oh the selected player!');
            }
        }
        else {
            document.getElementById('coach-expenses').value = '';
            document.getElementById('manager-expenses').value = '';
            alert('You have to be honor the coach or the manager');
        }


    }
    else {
        document.getElementById('coach-expenses').value = '';
        document.getElementById('manager-expenses').value = '';
        alert('Enter a valid number');
    }


})