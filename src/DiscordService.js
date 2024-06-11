import axios from "axios";
import config from "./config.json";

const DiscordService = {
  send: async (data) => {
    const body = { content: data };
    try {
      await axios.post(config.DISCORD_WEBHOOK_URL, body);
    } catch (error) {
      console.error(error);
    }
  },
};

export default DiscordService;
