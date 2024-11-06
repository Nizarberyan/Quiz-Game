document.querySelector("button").addEventListener("click", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  localStorage.setItem("isDark", !isDark);
  document.querySelector("body").classList.toggle("dark", !isDark);
});

window.addEventListener("load", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  document.querySelector("body").classList.toggle("dark", isDark);
});
