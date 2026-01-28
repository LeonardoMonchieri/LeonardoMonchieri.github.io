const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function updateTheme(theme) {
    localStorage.setItem("theme", theme);
    html.dataset.theme = theme;

    if (toggle) {
      toggle.querySelector("img").src = theme === "dark" ? "images/sun.png" : "images/moon.png";
      toggle.querySelector("img").alt = theme === "dark" ? "Light mode" : "Dark mode";
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
}

function systemTheme() {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return dark ? "dark" : "light";
}

window.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem("theme") || systemTheme();
    updateTheme(currentTheme);
});

toggle?.addEventListener("click", () => {
    const currentTheme = html.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    updateTheme(newTheme);
});
