package elifoot;

import java.util.ArrayList;
import java.util.List;

public class Team {

    String name;
    List<Player> players = new ArrayList<>();

    int points = 0;
    int goalsFor = 0;
    int goalsAgainst = 0;

    public Team(String name) {
        this.name = name;
    }

    public void addPlayer(Player player) {
        players.add(player);
    }

    public int attackPower() {
        return players.stream().mapToInt(p -> p.attack).sum() / players.size();
    }

    public int defensePower() {
        return players.stream().mapToInt(p -> p.defense).sum() / players.size();
    }
}
