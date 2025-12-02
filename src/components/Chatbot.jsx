import { useState, useEffect, useRef } from "react";

const Chatbot = ({
  botName = "Bot",
  greetingMessage = "Hello!",
  botResponses = {},
  placeholder = "Type a message..."
}) => {
  const [messages, setMessages] = useState([{ sender: "bot", text: greetingMessage }]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (text) => {
    text = text.toLowerCase();
    for (const key in botResponses) {
      if (text.includes(key.toLowerCase())) return botResponses[key];
    }
    return "I'm not sure I understand. Can you explain further?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userText = input;
    setInput("");

    setTimeout(() => {
      const botReply = getBotResponse(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Toggler Button */}
      <button className="chatbot-toggler" onClick={() => setOpen(!open)}>
        <i className="bi bi-chat-dots-fill"></i>
      </button>

      {/* Chatbot Container */}
      <div className={`chatbot-container ${open ? "open" : ""}`}>
        <div className="chatbot-header">{botName}</div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "user" ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
