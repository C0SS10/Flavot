import "@/styles/Chat.css";
import Hat from "@/assets/chef-hat.svg";
import Send from "@/assets/send-icon.svg";

export function Chat() {
  return (
    <section className="chat">
      <header className="chat-header">
        <h1>Flavot</h1>
        <img src={Hat} alt="Icon chef hat" className="icon" />
      </header>
      <main className="chat-window">
        <ul className="message incoming">
          <li></li>
        </ul>
        <ul className="message outgoing">
          <li></li>
        </ul>
      </main>
      <footer className="chat-footer">
        <input
          type="text"
          className="message-input"
          aria-label="Here your message"
          placeholder="Cook your message"
        />
        <button type="button" className="send-button">
          <img src={Send} alt="Send icon" className="send-icon" />
        </button>
      </footer>
    </section>
  );
}
