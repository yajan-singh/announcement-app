import axios from 'axios';
import config from './config.json';

const WhatsAppService = {
    send: async (msg) => {
        const url = 'https://graph.facebook.com/v19.0/369538856232066/messages';
        const token = config.whatsappToken;

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const data = {
            messaging_product: 'whatsapp',
            to: '16479167010',
            type: 'text',
            text: {
                preview_url: 'false',
                body: msg
            }
        };
        try {
            const response = await axios.post(url, data, { headers });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }

    }
};

export default WhatsAppService;