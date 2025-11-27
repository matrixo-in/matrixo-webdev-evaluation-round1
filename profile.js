function saveProfile() {
  const name = document.getElementById("userName").value;
  const avatar = document.getElementById("avatarUrl").value;
  const theme = document.getElementById("themeSelector").value;

  localStorage.setItem("name", name);
  localStorage.setItem("avatar", avatar);
  localStorage.setItem("theme", theme);

  document.body.className = theme;

  alert("Profile saved!");
}

window.onload = () => {
  if (localStorage.getItem("theme")) {
    document.body.className = localStorage.getItem("theme");
  }
};
