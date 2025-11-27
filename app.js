// GOOGLE LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(() => {
    alert("Logged in!");
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block";
  });
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut();
  alert("Logged out!");
  document.getElementById("loginBtn").style.display = "block";
  document.getElementById("logoutBtn").style.display = "none";
});
