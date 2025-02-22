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
          top: offsetTop - 50, // Adjust if you have a fixed header
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

const skills = [
  { name: "Laravel", img: "assets/img/laravel.png", alt: "Laravel logo" },
  { name: "PHP", img: "assets/img/php.png", alt: "PHP logo" },
  {
    name: "JavaScript",
    img: "assets/img/javascript.png",
    alt: "JavaScript logo",
  },
  {
    name: "HTML/CSS",
    img: "assets/img/html_css.png",
    alt: "HTML and CSS logo",
  },
  { name: "React", img: "assets/img/react.png", alt: "React logo" },
  { name: "Git", img: "assets/img/git.png", alt: "Git logo" },
  { name: "MySQL", img: "assets/img/mysql.png", alt: "MySQL logo" },
  { name: "MongoDB", img: "assets/img/mongodb.png", alt: "MongoDB logo" },
  { name: "Python", img: "assets/img/python.png", alt: "Python logo" },
  { name: "Flask", img: "assets/img/flask.png", alt: "Flask logo" },
];

const skillsWrapper = document.getElementById("skills-card");

skills.forEach((skill) => {
  const article = document.createElement("article");
  article.classList.add("skill-card");

  const img = document.createElement("img");
  img.classList.add("skill-icon");
  img.src = skill.img;
  img.alt = skill.alt;

  const span = document.createElement("span");
  span.classList.add("skill-name");
  span.textContent = skill.name;

  article.appendChild(img);
  article.appendChild(span);
  skillsWrapper.appendChild(article);
});
