import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
