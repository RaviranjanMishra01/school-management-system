document.addEventListener("DOMContentLoaded", () => {
  const alertEl = document.querySelector(".alert");
  if (!alertEl) return;

  const closeBtn = alertEl.querySelector(".close-btn");
  // Auto-hide after 5 seconds
  const timeoutId = setTimeout(() => {
    alertEl.classList.add("fade-out");
    setTimeout(() => alertEl.remove(), 400);
  }, 5000);

  // Manual close cancels timeout
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      clearTimeout(timeoutId);
      alertEl.classList.add("fade-out");
      setTimeout(() => alertEl.remove(), 300);
    });
  }
});
