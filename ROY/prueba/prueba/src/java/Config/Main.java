//package Config;
//
//import org.telegram.telegrambots.meta.TelegramBotsApi;
//import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
//import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;
//
//import org.telegram.telegrambots.meta.api.methods.groupadministration.GetChat;
//import org.telegram.telegrambots.meta.api.objects.Chat;
//
//import java.util.Scanner;
//
//public class Main {
//
//    public static void main(String[] args) {
//
//        try {
//            TelegramBotsApi botsApi = new TelegramBotsApi(DefaultBotSession.class);
//            Telegram bot = new Telegram();
//            botsApi.registerBot(bot);  
//            bot.onStart();
//
//            Scanner scanner = new Scanner(System.in);
//            while (true) {
//                System.out.print("Ingrese mensaje a enviar: ");
//                String mensaje = scanner.nextLine();
//                Long chatId = 5676191298L;
//                bot.enviarMensaje(chatId, mensaje);
//
//            }
//
//        } catch (TelegramApiException e) {
//            e.printStackTrace();
//        }
//    }
//}
