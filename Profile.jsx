import { useState } from "react";

export default function Profile({ user, setTheme }) {
  const [name, setName] = useState(user ? user.displayName : "");
  const [avatar, setAvatar] = useState("");

  return (
    <div className="card">
      <h3>Profile Settings</h3>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Avatar URL:</label>
      <input value={avatar} onChange={(e) => setAvatar(e.target.value)} />

      <label>Theme:</label>
      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <div>
        <img
          src={avatar || "https://via.placeholder.com/80"}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
