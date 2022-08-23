document.getElementById('btn-player-calculate').addEventListener('click', function () {
    const perPlayerTakaInputField = document.getElementById('per-player-field');
    const perPlayerTaka = parseFloat(perPlayerTakaInputField.value);

    const totalSelectedPlayer = document.getElementById('selected-player');
    const totalSelectedPlayerNumber = totalSelectedPlayer.childNodes.length - 1;

    const AllPlayerExpensesElement = document.getElementById('all-player-expenses');
    if ((Number.isNaN(perPlayerTaka) == false && Math.sign(perPlayerTaka) == 1)) {
        const AllPlayerExpenses = perPlayerTaka * totalSelectedPlayerNumber;
        AllPlayerExpensesElement.innerText = AllPlayerExpenses;
    }
    else {
        perPlayerTakaInputField.value = '';
        alert("Give a handsome honorary")
    }
})
