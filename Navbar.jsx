import { googleLogin } from "../firebase";

export default function Navbar({ user, setUser }) {
  const login = async () => {
    const result = await googleLogin();
    setUser(result.user);
  };

  return (
    <nav>
      <h2>AI Productivity App</h2>
      {!user ? (
        <button onClick={login}>Sign in with Google</button>
      ) : (
        <p>Welcome, {user.displayName}</p>
      )}
    </nav>
  );
}
