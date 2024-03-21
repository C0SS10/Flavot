import "@/styles/Chat.css";
import Hat from "@/assets/chef-hat.svg";
import Send from "@/assets/send-icon.svg";

export function Chat() {
  return (
    <section className="chat">
      <header className="chat-header">
        <h1>Flavot | Ideas for cooking</h1>
        <img src={Hat} alt="Icon chef hat" className="icon" />
      </header>
      <main className="chat-window">
        <ul className="message incoming">
          <li>Hello! What type of meal are you interested in? (e.g., breakfast, lunch, dinner)</li>
        </ul>
        <ul className="message outgoing">
          <li>I was looking for dinner</li>
        </ul>
      </main>
      <footer className="chat-footer">
        <input
          type="text"
          className="message-input"
          aria-label="Here your message"
          placeholder="Cook your message"
        />
        <a href="#" className="send-button">
          <img src={Send} alt="Send icon" className="send-icon" />
        </a>
      </footer>
    </section>
  );
}
