import axios from "axios";
import config from "./config.json";

const DiscordService = {
  send: async (data) => {
    const body = { content: data };
    try {
      await axios.post(config.discordWebhook, body);
    } catch (error) {
      console.error(error);
    }
  },
};

export default DiscordService;
