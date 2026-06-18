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
