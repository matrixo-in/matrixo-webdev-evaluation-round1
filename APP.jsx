import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Translator from "./components/Translator";
import Chatbot from "./components/Chatbot";

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Navbar user={user} setUser={setUser} />
      <Profile user={user} setTheme={setTheme} />
      <Translator />
      <Chatbot />
    </div>
  );
}

export default App;
