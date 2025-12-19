package elifoot;

import java.util.Random;

public class MatchSimulator {

    private static final Random random = new Random();

    public static void playMatch(Team home, Team away) {

        int goalsHome = 0;
        int goalsAway = 0;

        for (int minute = 0; minute <= 90; minute += 10) {

            int chanceHome = home.attackPower() - away.defensePower() + random.nextInt(20);
            int chanceAway = away.attackPower() - home.defensePower() + random.nextInt(20);

            if (chanceHome > 50) goalsHome++;
            if (chanceAway > 50) goalsAway++;
        }

        home.goalsFor += goalsHome;
        home.goalsAgainst += goalsAway;
        away.goalsFor += goalsAway;
        away.goalsAgainst += goalsHome;

        if (goalsHome > goalsAway) {
            home.points += 3;
        } else if (goalsAway > goalsHome) {
            away.points += 3;
        } else {
            home.points += 1;
            away.points += 1;
        }

        System.out.println("⚽ " + home.name + " " + goalsHome + " x " + goalsAway + " " + away.name);
    }
}
