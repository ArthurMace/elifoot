package elifoot;

import java.util.ArrayList;
import java.util.List;

public class League {

    List<Team> teams = new ArrayList<>();

    public League() {
        Team t1 = createTeam("Sparta FC");
        Team t2 = createTeam("Athenas FC");
        Team t3 = createTeam("Roma FC");
        Team t4 = createTeam("Troia FC");

        teams.add(t1);
        teams.add(t2);
        teams.add(t3);
        teams.add(t4);
    }

    private Team createTeam(String name) {
        Team t = new Team(name);
        for (int i = 1; i <= 11; i++) {
            t.addPlayer(new Player(name + " P" + i, 55 + i % 10, 50 + i % 8));
        }
        return t;
    }

    public void playRound() {
        System.out.println("\n🔴 RODADA 🔴");
        for (int i = 0; i < teams.size(); i += 2) {
            MatchSimulator.playMatch(teams.get(i), teams.get(i + 1));
        }
    }

    public void showTable() {
        System.out.println("\n📊 CLASSIFICAÇÃO");
        for (Team t : teams) {
            System.out.println(
                t.name + " | " +
                t.points + " pts | " +
                t.goalsFor + ":" + t.goalsAgainst
            );
        }
    }
}

