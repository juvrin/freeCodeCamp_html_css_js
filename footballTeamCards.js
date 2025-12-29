let teamName = document.getElementById("team");
let yearTeam = document.getElementById("year");
let headCoachTeam = document.getElementById("head-coach");
let playerCards = document.getElementById("player-cards");
let playerOption = document.getElementById("players");

let footballTeam = {team:"Man United", year:2022, headCoach:"Michael Johnson", players:
[{name:"Pablo Picasso", position:"forward", isCaptain:false},
{name:"Salvador Dali", position:"midfielder", isCaptain:false},
{name:"Manet", position:"defender", isCaptain:false},
{name:"That Other Bloke", position:"goalkeeper", isCaptain:true},
{name:"Bernard", position:"midfielder", isCaptain:false}
]};

teamName.innerText = footballTeam.team;
yearTeam.innerText = footballTeam.year;
headCoachTeam.innerText = footballTeam.headCoach;


playerOption.addEventListener("change", () => updateCards())

function updateCards(){
  let filtered = [];
  if(playerOption.value == "all"){
    filtered = footballTeam.players;
  } else{
    filtered = footballTeam.players.filter((player) => player.position == playerOption.value);
  };
   
  let playerCardsArr = [];
  // filtered.forEach((player) => playerCardsArr.push(`<div class="player-card"><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`));
  

  filtered.forEach((player) => {
let templateString = player.isCaptain ? `<div class="player-card"><h2>(Captain) ${player.name}</h2><p>Position: ${player.position}</p></div>` : `<div class="player-card"><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`;
    playerCardsArr.push(templateString)
    });


playerCards.innerHTML = playerCardsArr.join("");
return playerCards
}

