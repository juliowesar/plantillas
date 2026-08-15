const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Formulario listo visualmente. En la siguiente fase conectamos el envío real.";
  note.style.color = "#f28c00";
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("main section[id], footer[id]")];
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

window.addEventListener("scroll", () => {
  const y = window.scrollY + 150;
  let current = "inicio";
  sections.forEach(section => {
    if (section.offsetTop <= y) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
