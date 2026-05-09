const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuBtn.textContent = "☰";
  } else {
    menuBtn.textContent = "✕";
  }
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.textContent = "☰";
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const messageData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
    createdAt: new Date().toLocaleString()
  };

  localStorage.setItem("portfolioMessage", JSON.stringify(messageData));

  formMsg.classList.remove("hidden");
  contactForm.reset();

  setTimeout(() => {
    formMsg.classList.add("hidden");
  }, 3000);
});

