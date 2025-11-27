import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const askAI = async () => {
    const res = await axios.post("http://localhost:5000/api/ai/chat", {
      message,
    });
    setReply(res.data.reply);
  };

  return (
    <div className="card">
      <h3>AI Chatbot</h3>

      <textarea
        placeholder="Ask something..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askAI}>Send</button>

      <p><b>AI:</b> {reply}</p>
    </div>
  );
}
