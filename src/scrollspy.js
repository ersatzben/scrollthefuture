document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("h1");
  const navLinks = document.querySelectorAll(".site-toc a");

  function activateLink() {
    let current = sections[0];

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= window.innerHeight / 2) {
        current = section;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current.id}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLink);
  activateLink(); // Run on load
});
