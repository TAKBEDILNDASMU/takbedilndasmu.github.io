const roles = ["Fullstack Developer", "UI/UX Designer", "Software Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingRole = document.getElementById("typing-role");

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingRole.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingRole.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // Switch to next role
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Adjust speed
}

document.addEventListener("DOMContentLoaded", typeEffect);
