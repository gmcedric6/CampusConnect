import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ChatbotWidget.css";

const defaultMessages = [
  {
    from: "bot",
    text: "Bonjour ! Je suis l’assistant CampusConnect. Comment puis-je vous aider ?",
  },
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // For JS, but for TSX use: useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      {
        from: "bot",
        text: "Merci pour votre message ! Un conseiller vous répondra bientôt ou consultez la FAQ ci-dessus.",
      },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        className="chatbot-fab"
        aria-label="Ouvrir le chat d'assistance"
        onClick={() => setOpen((v) => !v)}
      >
        <span role="img" aria-label="Chat">
          💬
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
            style={{ zIndex: 1000 }}
          >
            <div className="chatbot-header">
              <span>Assistant CampusConnect</span>
              <button
                className="chatbot-close"
                onClick={() => setOpen(false)}
                aria-label="Fermer le chat"
              >
                ×
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-inputbar" onSubmit={handleSend}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                aria-label="Votre message"
                autoFocus
              />
              <button type="submit">Envoyer</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
