<script>
let myTeam = null;
let round = 1;

const teams = [
  { name: "Sparta FC", pts: 0, gf: 0, ga: 0 },
  { name: "Roma FC", pts: 0, gf: 0, ga: 0 },
  { name: "Athenas FC", pts: 0, gf: 0, ga: 0 },
  { name: "Troia FC", pts: 0, gf: 0, ga: 0 }
];

const selection = document.getElementById("team-selection");
const game = document.getElementById("game");

function startGame(teamName) {
  myTeam = teams.find(t => t.name === teamName);
  selection.style.display = "none";

  game.innerHTML = `
    <h2>Seu time: ${myTeam.name}</h2>
    <p>Rodada: <span id="round">${round}</span></p>

    <button onclick="playRound()">▶ Jogar Rodada</button>
    <button onclick="showTable()">📊 Classificação</button>

    <div id="output"></div>
  `;
  game.style.display = "block";
}

function playRound() {
  const output = document.getElementById("output");
  let html = `<h3>⚽ Resultados – Rodada ${round}</h3>`;

  for (let i = 0; i < teams.length; i += 2) {
    let a = teams[i];
    let b = teams[i + 1];

    let gA = Math.floor(Math.random() * 4);
    let gB = Math.floor(Math.random() * 4);

    a.gf += gA; a.ga += gB;
    b.gf += gB; b.ga += gA;

    if (gA > gB) a.pts += 3;
    else if (gB > gA) b.pts += 3;
    else { a.pts++; b.pts++; }

    html += `<p>${a.name} ${gA} x ${gB} ${b.name}</p>`;
  }

  round++;
  document.getElementById("round").innerText = round;
  output.innerHTML = html;
}

function showTable() {
  const output = document.getElementById("output");
  let html = "<h3>📊 Classificação</h3>";

  teams
    .slice()
    .sort((a, b) => b.pts - a.pts)
    .forEach(t => {
      html += `<p>${t.name} - ${t.pts} pts (${t.gf}:${t.ga})</p>`;
    });

  output.innerHTML = html;
}
</script>
