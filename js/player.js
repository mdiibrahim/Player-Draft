function selectPlayer(playerSelectBtn, selectedPlayerName) {
    document.getElementById(playerSelectBtn).addEventListener('click', function () {
    
        const playerNameElement = document.getElementById(selectedPlayerName);
        const playerName = playerNameElement.innerText; 
        const totalSelectedPlayer = document.getElementById('selected-player');
     
        const li = document.createElement('li');
        li.innerText = playerName;
        const totalPlayerNumber = totalSelectedPlayer.childNodes.length - 1;
        if (totalPlayerNumber < 5) {
            totalSelectedPlayer.appendChild(li);
            document.getElementById(playerSelectBtn).disabled = true;  
        }
        else {
            alert("You cannot select more than 5 player");
        }
        
        
    })
}
selectPlayer('btn-player-select-1', 'player-name-1');
selectPlayer('btn-player-select-2', 'player-name-2');
selectPlayer('btn-player-select-3', 'player-name-3');
selectPlayer('btn-player-select-4', 'player-name-4');
selectPlayer('btn-player-select-5', 'player-name-5');
selectPlayer('btn-player-select-6', 'player-name-6');


