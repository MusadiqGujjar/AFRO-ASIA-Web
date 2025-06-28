window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
      preloader.style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 500); 
  }, 2000); 
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";

      // Add animation class to main content
      setTimeout(() => {
        content.classList.add("reveal");
      }, 50);
    }, 500);
  }, 2000);
});

// Toggle

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }

  // Close nav when clicking outside on small screens
  window.addEventListener('click', function(e) {
    const nav = document.getElementById("navLinks");
    const burger = document.querySelector(".hamburger");
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("show");
    }
  });
