document.addEventListener("DOMContentLoaded", () => {

  let myTeam = null;

  const teams = [
    { name: "Sparta FC", attack: 70, defense: 65, points: 0, gf: 0, ga: 0 },
    { name: "Athenas FC", attack: 68, defense: 66, points: 0, gf: 0, ga: 0 },
    { name: "Roma FC", attack: 72, defense: 60, points: 0, gf: 0, ga: 0 },
    { name: "Troia FC", attack: 65, defense: 70, points: 0, gf: 0, ga: 0 }
  ];

  const teamsDiv = document.getElementById("teams");
  const teamSelection = document.getElementById("team-selection");
  const gameMenu = document.getElementById("game-menu");
  const myTeamText = document.getElementById("my-team");
  const output = document.getElementById("output");

  // RENDERIZA BOTÕES DOS TIMES
  teams.forEach((team, index) => {
    const btn = document.createElement("button");
    btn.textContent = team.name;
    btn.addEventListener("click", () => selectTeam(index));
    teamsDiv.appendChild(btn);
  });

  function selectTeam(index) {
    myTeam = teams[index];

    teamSelection.style.display = "none";
    gameMenu.style.display = "block";

    myTeamText.textContent = "Seu time: " + myTeam.name;
  }

  function randomGoals(att, def) {
    let goals = 0;
    for (let i = 0; i < 5; i++) {
      if (Math.random() * 100 < att - def + 50) goals++;
    }
    return goals;
  }

  document.getElementById("btn-round").addEventListener("click", () => {
    let html = "<h3>🔴 Rodada</h3>";

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

      html += `<p>${a.name} ${goalsA} x ${goalsB} ${b.name}</p>`;
    }

    output.innerHTML = html;
  });

  document.getElementById("btn-table").addEventListener("click", () => {
    let html = "<h3>📊 Classificação</h3>";

    teams
      .slice()
      .sort((a, b) => b.points - a.points)
      .forEach(t => {
        html += `<p>${t.name} - ${t.points} pts (${t.gf}:${t.ga})</p>`;
      });

    output.innerHTML = html;
  });

});
