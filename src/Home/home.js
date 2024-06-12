import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row">
          <a
            href="https://t.me/+5Caapnk1yP0yOWMx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="faIcon faTelegram"
              icon={faTelegram}
              size="5x"
            />
          </a>
          <a
            href="https://discord.gg/hxRXgsGr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="faIcon faDiscord"
              icon={faDiscord}
              size="5x"
            />
          </a>
          <a
            href="YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="faIcon faWhatsapp"
              icon={faWhatsapp}
              size="5x"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
