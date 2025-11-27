async function summarize() {
  const text = document.getElementById("inputText").value;

  const res = await fetch("https://api.allorigins.win/raw?url=https://api.api-ninjas.com/v1/summarize?text=" + text, {
    headers: { "X-Api-Key": "YOUR_FREE_API_KEY" }
  });

  const data = await res.json();
  document.getElementById("outputText").innerText = data.summary;
}
