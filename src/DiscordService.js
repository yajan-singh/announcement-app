import axios from "axios";
import { DISCORD_WEBHOOK_URL } from "./config";

const DiscordService = {
  send: async (data) => {
    const body = { content: data };
    try {
      await axios.post(DISCORD_WEBHOOK_URL, body);
    } catch (error) {
      console.error(error);
    }
  },
};

export default DiscordService;
