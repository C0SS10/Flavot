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
          <li>But the life came to me and i was happy with it</li>
        </ul>
        <ul className="message outgoing">
          <li>All my effort was in vane, but the think i was doing is that</li>
        </ul>
        <ul className="message incoming">
          <li>But the life came to me and i was happy with it</li>
        </ul>
        <ul className="message outgoing">
          <li>All my effort was in vane, but the think i was doing is that All my effort was in vane, but the think i was doing is that</li>
        </ul>
        <ul className="message incoming">
          <li>But the life came to me and i was happy with it</li>
        </ul>
        <ul className="message outgoing">
          <li>All my effort was in vane, but the think i was doing is that</li>
        </ul>
        <ul className="message incoming">
          <li>But the life came to me and i was happy with it</li>
        </ul>
        <ul className="message outgoing">
          <li>All my effort was in vane, but the think i was doing is that</li>
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
