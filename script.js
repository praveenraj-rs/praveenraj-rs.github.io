const themeToggle = document.getElementById("themeToggle");

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});
document.getElementById("github-icon").addEventListener("click", () => {
  window.open("https://www.github.com/praveenraj-rs", "_blank");
});
document.getElementById("instagram-icon").addEventListener("click", () => {
  window.open("https://www.instagram.com/praveenraj_rs", "_blank");
});
document.getElementById("linkedin-icon").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/praveenrajrs/", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section.page");
  const navLinks = document.querySelectorAll(".nav_selection a");

  const observerOptions = {
    root: null, // viewport
    threshold: 0.6, // 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active-link"));

        // Add active class to the link corresponding to the current section
        const activeLink = document.querySelector(
          `.nav_selection a[href="#${entry.target.id}"]`
        );
        activeLink.classList.add("active-link");
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((section) => observer.observe(section));
});
