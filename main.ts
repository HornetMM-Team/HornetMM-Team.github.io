document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("download-btn");
  btn?.addEventListener("click", () => {
    window.open("https://github.com/HornetMM-Team/HornetMM/releases/latest", "_blank");
  });
});
