let myTeam = null;

const teams = [
  { name: "Sparta FC", attack: 70, defense: 65, points: 0, gf: 0, ga: 0 },
  { name: "Athenas FC", attack: 68, defense: 66, points: 0, gf: 0, ga: 0 },
  { name: "Roma FC", attack: 72, defense: 60, points: 0, gf: 0, ga: 0 },
  { name: "Troia FC", attack: 65, defense: 70, points: 0, gf: 0, ga: 0 }
];

// MOSTRAR TIMES PARA ESCOLHA
const teamsDiv = document.getElementById("teams");

teams.forEach((team, index) => {
  const btn = document.createElement("button");
  btn.innerText = team.name;
  btn.onclick = () => selectTeam(index);
  teamsDiv.appendChild(btn);
});

// ESCOLHER TIME
function selectTeam(index) {
  myTeam = teams[index];

  document.getElementById("team-selection").style.display = "none";
  document.getElementById("game-menu").style.display = "block";

  document.getElementById("my-team").innerText =
    "Seu time: " + myTeam.name;
}

// SIMULAÇÃO DE GOLS
function randomGoals(att, def) {
  let goals = 0;
  for (let i = 0; i < 5; i++) {
    if (Math.random() * 100 < att - def + 50) goals++;
  }
  return goals;
}

// JOGAR RODADA
function playRound() {
  let output = "<h3>🔴 Rodada</h3>";

  for (let i = 0; i < teams.length; i += 2) {
    let a = teams[i];
    let b = teams[i + 1];

    let goalsA = randomGoals(a.attack, b.defense);
    let goalsB = randomGoals(b.attack, a.defense);

    a.gf += goalsA; a.ga += goalsB;
    b.gf += goalsB; b.ga += goalsA;

    if (goalsA > goalsB) a.points += 3;
    else if (goalsB > goalsA) b.points += 3;
    else { a.points++; b.points++; }

    output += `<p>${a.name} ${goalsA} x ${goalsB} ${b.name}</p>`;
  }

  document.getElementById("output").innerHTML = output;
}

// CLASSIFICAÇÃO
function showTable() {
  let output = "<h3>📊 Classificação</h3>";

  teams
    .slice()
    .sort((a, b) => b.points - a.points)
    .forEach(t => {
      output += `<p>${t.name} - ${t.points} pts (${t.gf}:${t.ga})</p>`;
    });

  document.getElementById("output").innerHTML = output;
}
