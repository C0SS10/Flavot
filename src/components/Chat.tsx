import { useEffect, useRef, useState } from "react";
import { Message } from "@/components/Message";
import { botMessages } from "@/utils/bot-messages";
import { RecipeMessage } from "@/components/RecipeMessage";
import Hat from "@/assets/chef-hat.svg";
import Send from "@/assets/send-icon.svg";
import "@/styles/Chat.css";

export function Chat() {
  const [messages, setMessages] = useState<Array<string | JSX.Element>>([
    botMessages[0],
  ]);
  const [step, setSteps] = useState<number>(0);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const handleUserInput = (input: string) => {
    setMessages((prevMessages) => [...prevMessages, `${input}`]);
    if (validateUserInput(input)) {
      setUserInputs((prevInputs) => [...prevInputs, input]);
      if (step < botMessages.length - 1) {
        setMessages((prevMessages) => [...prevMessages, botMessages[step + 1]]);
        setSteps(step + 1);
      }
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        `Please provide a valid response.`,
      ]);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const validateUserInput = (input: string): boolean => {
    switch (step) {
      case 0:
        return (
          input.toLowerCase().includes("breakfast") ||
          input.toLowerCase().includes("lunch") ||
          input.toLowerCase().includes("dinner")
        );
      case 1:
        return (
          input.toLowerCase().includes("vegetarian") ||
          input.toLowerCase().includes("gluten free") ||
          input.toLowerCase().includes("low carb") ||
          input.toLowerCase().includes("none")
        );
      case 2:
        return (
          input.toLowerCase().includes("15 minutes") ||
          input.toLowerCase().includes("30 minutes") ||
          input.toLowerCase().includes("1 hour")
        );
      case 3:
        return (
          input.toLowerCase().includes("italian") ||
          input.toLowerCase().includes("mexican") ||
          input.toLowerCase().includes("asian")
        );
      case 4:
        return (
          input.toLowerCase().includes("salad") ||
          input.toLowerCase().includes("soup") ||
          input.toLowerCase().includes("pasta")
        );
      case 5:
        return (
          input.toLowerCase().includes("simple") ||
          input.toLowerCase().includes("elaborate")
        );
      default:
        return true;
    }
  };

  return (
    <article className="chat">
      <header className="chat-header">
        <h1>Flavot | Ideas for cooking</h1>
        <img src={Hat} alt="Icon chef hat" className="icon" />
      </header>
      <main className="chat-window" ref={chatWindowRef}>
        {messages.map((message: string | JSX.Element, index: number) => (
          <div key={index}>
            {typeof message === "string" ? (
              <Message
                message={message}
                type={index % 2 === 0 ? "message incoming" : "message outgoing"}
              />
            ) : (
              message
            )}
          </div>
        ))}
        {step === 6 && (
          <RecipeMessage userInputs={userInputs}/>
        )}
      </main>
      <footer className="chat-footer">
        {step < botMessages.length - 1 && (
          <input
            type="text"
            className="message-input"
            aria-label="Here your message"
            placeholder="Cook your message"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleUserInput(event.currentTarget.value);
                event.currentTarget.value = "";
              }
            }}
          />
        )}
        <a
          className="send-button"
          onClick={() =>
            handleUserInput(
              (document.querySelector(".message-input") as HTMLInputElement)
                .value
            )
          }
        >
          <img src={Send} alt="Send icon" className="send-icon" />
        </a>
      </footer>
    </article>
  );
}
