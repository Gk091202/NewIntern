// main.js - Modern Gen Z Website Interactivity

// Smooth scroll animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// 3D hover effects for cards
function add3DTilt(selector) {
  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });
}
add3DTilt(".blog-card, .interactive-card");

// Floating animation for hero elements
function animateFloatingElements() {
  document.querySelectorAll(".floating-element").forEach((element, index) => {
    const duration = 4000 + index * 1000;
    const delay = index * 500;
    element.style.animationDuration = `${duration}ms`;
    element.style.animationDelay = `${delay}ms`;
  });
}
animateFloatingElements();

// Theme toggle functionality (dark mode)
function setupThemeToggle() {
  const themeToggle = document.createElement("button");
  themeToggle.innerHTML = "🌓";
  themeToggle.className = "btn-modern position-fixed";
  themeToggle.style.cssText = `
        bottom: 2rem; right: 2rem; z-index: 1000; width: 60px; height: 60px; border-radius: 50%; font-size: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.15);`;
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.body.appendChild(themeToggle);
}
setupThemeToggle();

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll(".floating-element").forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px) rotate(${
      scrolled * 0.02
    }deg)`;
  });
});

// Enhanced button hover effects
function setupButtonHover() {
  document.querySelectorAll(".btn-modern").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-3px) scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0) scale(1)";
    });
  });
}
setupButtonHover();

// Loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 100);
    });
  }, 300);
});
