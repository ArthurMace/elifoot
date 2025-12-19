package elifoot;

import java.util.Random;

public class MatchSimulator {

    private static final Random random = new Random();

    public static void playMatch(Team a, Team b) {

        int goalsA = 0;
        int goalsB = 0;

        for (int i = 0; i < 9; i++) {
            if (random.nextInt(100) < a.attackPower() - b.defensePower() + 50)
                goalsA++;

            if (random.nextInt(100) < b.attackPower() - a.defensePower() + 50)
                goalsB++;
        }

        a.goalsFor += goalsA;
        a.goalsAgainst += goalsB;
        b.goalsFor += goalsB;
        b.goalsAgainst += goalsA;

        if (goalsA > goalsB) {
            a.points += 3;
        } else if (goalsB > goalsA) {
            b.points += 3;
        } else {
            a.points += 1;
            b.points += 1;
        }

        System.out.println(a.name + " " + goalsA + " x " + goalsB + " " + b.name);
    }
}
