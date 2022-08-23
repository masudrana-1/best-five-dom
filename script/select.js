let playersArray = [];

function totalplayer(player) {

    const playerList = document.getElementById('list');

    playerList.innerHTML = "";

    for (let i = 0; i < player.length; i++) {

        const players = playersArray[i];

        const li = document.createElement('li');

        li.innerText = players;
        li.classList.add('player');
        li.classList.add('mb-8')
        li.classList.add('font-bold');
        li.classList.add('text-white');

        playerList.appendChild(li);

    }


}

function select(element) {

    const playerName = element.parentNode.children[0].innerText;

    if (playersArray.length >= 5) {
        alert("You can not select more then 5 player.");
    } else {
        element.setAttribute("disabled", true);
        element.style.backgroundColor = '#607EAA';

        playersArray.push(playerName);

        totalplayer(playersArray);
    }


    document.getElementById('players-count').innerText = playersArray.length;


}
