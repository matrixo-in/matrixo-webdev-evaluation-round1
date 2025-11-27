import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function StudyNotesAI() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  const genAI = new GoogleGenerativeAI("YOUR_GEMINI_KEY");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const generate = async () => {
    const res = await model.generateContent(
      `Generate short, exam-ready notes on: ${topic}`
    );
    setNotes(res.response.text());
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">AI Study Notes</h2>

      <input
        className="border p-2 w-full"
        placeholder="Enter topic…"
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generate}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
      >
        Generate
      </button>

      {notes && (
        <div className="mt-3 bg-gray-200 p-3 rounded">{notes}</div>
      )}
    </div>
  );
}
