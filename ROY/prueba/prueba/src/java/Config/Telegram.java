package Config;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

public class Telegram extends TelegramLongPollingBot {

    private String botUsername; 
    private String botToken;    

    public Telegram(String botUsername, String botToken) {
        this.botUsername = botUsername;
        this.botToken = botToken;
    }

    @Override
    public String getBotUsername() {
//return "nombre_bot";
        return botUsername;
    }

    @Override

    public String getBotToken() {
//String token = "token_bot";
        return botToken;
    }

    public void onStart(String textoEnviar, String id_telegram) {
//Long chatId = id_telegram;
        SendMessage message = new SendMessage();
        message.setChatId(id_telegram);
        message.setText(textoEnviar);

        try {
            execute(message);

        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onUpdateReceived(Update update) {
    }
}
