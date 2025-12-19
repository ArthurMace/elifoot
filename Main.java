package elifoot;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        League league = new League();

        while (true) {
            System.out.println("\n==============================");
            System.out.println("      ⚽ ELIFOOT JAVA ⚽      ");
            System.out.println("==============================");
            System.out.println("1 - Jogar rodada");
            System.out.println("2 - Ver classificação");
            System.out.println("0 - Sair");
            System.out.print("Escolha: ");

            int option = sc.nextInt();

            if (option == 1) {
                league.playRound();
            } 
            else if (option == 2) {
                league.showTable();
            } 
            else if (option == 0) {
                System.out.println("Encerrando jogo...");
                break;
            } 
            else {
                System.out.println("Opção inválida.");
            }
        }

        sc.close();
    }
}
