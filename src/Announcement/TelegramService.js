import axios from 'axios';
import config from './config.json';

const TelegramUpdates = {
    send: async (data) => {
        try {
            const response = await axios.get('https://api.telegram.org/bot' + config.telegramBotToken + '/sendMessage?chat_id=' + config.telegramChatId + '&text=' + data);
            if (response.status !== 200) {
                console.error(response);
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default TelegramUpdates;