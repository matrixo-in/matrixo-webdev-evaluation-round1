import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function MoodMentorAI() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const genAI = new GoogleGenerativeAI("YOUR_GEMINI_KEY");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const analyzeMood = async () => {
    const out = await model.generateContent(
      `Analyze student's mood and give motivation: ${text}`
    );
    setResponse(out.response.text());
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">AI Mood Mentor</h2>

      <textarea
        className="w-full border p-2"
        placeholder="How are you feeling?"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyzeMood}
        className="bg-purple-600 text-white px-4 py-2 mt-2 rounded"
      >
        Analyze
      </button>

      {response && (
        <div className="mt-3 bg-gray-200 p-3 rounded">{response}</div>
      )}
    </div>
  );
}
