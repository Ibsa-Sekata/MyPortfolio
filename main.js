var typed = new Typed(".text", {
    strings: ["Video Editor", "Web Developer", "Graphic Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const toggle = document.getElementById("darkModeToggle");
const toggleMobile = document.getElementById("darkModeToggleMobile");
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    // Update both icons
    if (body.classList.contains("dark-mode")) {
        toggle.classList.replace("bx-moon", "bx-sun");
        toggleMobile.classList.replace("bx-moon", "bx-sun");
    } else {
        toggle.classList.replace("bx-sun", "bx-moon");
        toggleMobile.classList.replace("bx-sun", "bx-moon");
    }
}

toggle.addEventListener("click", toggleDarkMode);
toggleMobile.addEventListener("click", toggleDarkMode);
const text = `Beyond coding, I enjoy turning ideas into real products that solve problems and make
                life easier for
                users. I thrive in collaborative environments, continuously learning and experimenting with new
                technologies to deliver innovative solutions. My portfolio showcases projects that demonstrate my skills
                in full-stack development, UI/UX implementation, and performance optimization, reflecting my dedication
                to building high-quality web experiences.`;
const btn = document.querySelector(".more2");
const secondPara = document.querySelector(".second-para");

let expanded = false;

btn.addEventListener("click", function (e) {
    e.preventDefault(); // stop page jump

    if (!expanded) {
        secondPara.textContent = text
        btn.textContent = "Less About Me";
        btn.id = "#about";
        expanded = true;
    } else {
        secondPara.textContent = "";
        btn.textContent = "More About Me";
        expanded = false;
    }
});
// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Close menu when clicking on a nav link
const mobileNavLinks = document.querySelectorAll(".mobile-menu a");
mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    }
});