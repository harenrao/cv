function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeBtn");

  if (!html) return;

  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    if (btn) btn.innerText = "🌙 Dark";
  } else {
    html.setAttribute("data-theme", "dark");
    if (btn) btn.innerText = "☀️ Light";
  }
}