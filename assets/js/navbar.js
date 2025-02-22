document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      console.log("Clicked");
      event.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute("href").substring(1); // Get section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
          top: offsetTop - 100, // Adjust if you have a fixed header
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
});
