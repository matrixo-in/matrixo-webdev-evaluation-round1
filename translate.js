async function loadLanguage(lang) {
  const res = await fetch(`languages/${lang}.json`);
  const translation = await res.json();

  document.querySelectorAll("[data-translate]").forEach(el => {
    el.textContent = translation[el.dataset.translate];
  });
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});
