const firebaseConfig = {
  apiKey: "AIzaSyANOdOQQByBA84WRhSowSxftKDVPk-hE_0",
  authDomain: "health-wellness-f1e37.firebaseapp.com",
  projectId: "health-wellness-f1e37",
  storageBucket: "health-wellness-f1e37.firebasestorage.app",
  messagingSenderId: "658918952194",
  appId: "1:658918952194:web:0c9b7d46bc6f71561ac61b",
  measurementId: "G-JNV8KQYCTT"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  const authSection = document.getElementById('auth-section');
  if (user) {
    authSection.innerHTML = `
      <div class="user-info">
        <img src="${user.photoURL || 'default-avatar.png'}" alt="Avatar" class="user-avatar">
        <span class="user-name">${user.displayName || user.email}</span>
        <button id="logout-btn" class="logout-btn">Logout</button>
      </div>
    `;
    document.getElementById('logout-btn').addEventListener('click', () => {
      auth.signOut();
    });
  } else {
    authSection.innerHTML = `
      <button id="login-btn" class="auth-button">Login with Google</button>
    `;
    document.getElementById('login-btn').addEventListener('click', () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(() => {
        window.location.href = 'index.html';
      }).catch((error) => {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
      });
    });
  }
});
