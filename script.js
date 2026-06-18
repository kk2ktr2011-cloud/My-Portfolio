const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
  message.textContent = "Hello! Welcome to my portfolio page.";
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});

const resumeButton = document.getElementById("resumeButton");

resumeButton.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Keshav's_Resume.pdf";
  link.click();
});

const cards = document.querySelectorAll('.testimonial');
let current = 0;

setInterval(() => {
  cards[current].hidden = true;
  current = (current + 1) % cards.length;
  cards[current].hidden = false;
}, 5000);

const roles = [
  "Future Software Engineer",
  "Future Hardware Engineer",
];

let current_role = 0;
const role = document.getElementById("role");

setInterval(()=>{
  current_role = (current_role + 1) % roles.length;
  role.textContent = roles[current_role]
}, 2000);

let count = localStorage.getItem("visits");

if (!count) {
  count = 0;
}

count = Number(count) + 1;

localStorage.setItem("visits", count);

document.getElementById("count").textContent = count;