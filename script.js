const projects = [
  {
    title: "Scientific Calculator",
    desc: "Calculator built using HTML, CSS and JavaScript.",
    tech: "HTML | CSS | JavaScript",
    img: "images/project1.png",
    github: "https://github.com/Manoreshika/scientific-calculator",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Personal responsive portfolio website.",
    tech: "HTML | CSS | JavaScript",
    img: "images/project2.png",
    github: "https://github.com/Manoreshika",
    live: "#"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach(project => {
  grid.innerHTML += `
    <article class="project-card">
      <img src="${project.img}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <small>${project.tech}</small>
      <div class="project-buttons">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${project.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </article>
  `;
});

document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const skills = document.querySelectorAll(".skill-bar");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector("div").style.width = entry.target.dataset.width;
    }
  });
});

skills.forEach(skill => observer.observe(skill));