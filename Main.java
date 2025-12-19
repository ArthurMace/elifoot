package elifoot;

public class Main {

    public static void main(String[] args) {

        Team teamA = new Team("Sparta FC");
        Team teamB = new Team("Athenas FC");

        for (int i = 1; i <= 11; i++) {
            teamA.addPlayer(new Player("Jogador A" + i, "Campo", 60, 55, 80));
            teamB.addPlayer(new Player("Jogador B" + i, "Campo", 58, 57, 78));
        }

        MatchSimulator.playMatch(teamA, teamB);

        System.out.println("\n🏆 Pontuação:");
        System.out.println(teamA.name + ": " + teamA.points + " pts");
        System.out.println(teamB.name + ": " + teamB.points + " pts");
    }
}
