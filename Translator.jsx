import { useState } from "react";
import axios from "axios";

export default function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("hi");
  const [output, setOutput] = useState("");

  const translate = async () => {
    const res = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source: "en",
      target: lang,
      format: "text",
    });

    setOutput(res.data.translatedText);
  };

  return (
    <div className="card">
      <h3>Translate (English → Indian Languages)</h3>

      <textarea onChange={(e) => setText(e.target.value)} />

      <select onChange={(e) => setLang(e.target.value)}>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
      </select>

      <button onClick={translate}>Translate</button>

      <p><b>Output:</b> {output}</p>
    </div>
  );
}
