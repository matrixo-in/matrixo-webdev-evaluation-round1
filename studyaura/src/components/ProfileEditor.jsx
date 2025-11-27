import { useState } from "react";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function ProfileEditor() {
  const { user } = useAuth();

  const [name, setName] = useState(user.displayName);
  const [avatar, setAvatar] = useState(user.photoURL);

  const saveProfile = async () => {
    await setDoc(doc(db, "users", user.uid), {
      name,
      avatar
    });
    alert("Profile updated");
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Profile Settings</h2>

      <input
        className="border p-2 w-full mt-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full mt-2"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <button
        onClick={saveProfile}
        className="bg-blue-600 text-white px-4 py-2 mt-3 rounded"
      >
        Save
      </button>
    </div>
  );
}

