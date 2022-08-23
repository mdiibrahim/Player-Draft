document.getElementById('btn-player-calculate').addEventListener('click', function () {
    //each player expenses
    const perPlayerTakaInputField = document.getElementById('per-player-field');
    const perPlayerTaka = parseFloat(perPlayerTakaInputField.value);

    //selected player length
    const totalSelectedPlayer = document.getElementById('selected-player');
    const totalSelectedPlayerNumber = totalSelectedPlayer.childNodes.length - 1;

    //all player expenses
    const AllPlayerExpensesElement = document.getElementById('all-player-expenses');
    if ((Number.isNaN(perPlayerTaka) == false && Math.sign(perPlayerTaka) == 1)) {
        if (totalSelectedPlayerNumber > 0) {
            const AllPlayerExpenses = perPlayerTaka * totalSelectedPlayerNumber;
        AllPlayerExpensesElement.innerText = AllPlayerExpenses;
        }
        else {
            alert('Please! Select at least one player!')
        }
    }
    else {
        perPlayerTakaInputField.value = '';
        alert("Give a handsome honorary")
    }

})
