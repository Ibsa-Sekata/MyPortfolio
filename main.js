new Typed(".text", {
    strings: ["Video Editor", "Web Developer", "Graphic Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const toggle = document.getElementById("darkModeToggle");
const toggleMobile = document.getElementById("darkModeToggleMobile");
const body = document.body;

function updateThemeIcons() {
    const isDark = body.classList.contains("dark-mode");
    const removeIcon = isDark ? "bx-moon" : "bx-sun";
    const addIcon = isDark ? "bx-sun" : "bx-moon";

    [toggle, toggleMobile].forEach((icon) => {
        if (!icon) return;
        icon.classList.remove(removeIcon);
        icon.classList.add(addIcon);
    });
}

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    updateThemeIcons();
}

if (toggle) {
    toggle.addEventListener("click", toggleDarkMode);
}
if (toggleMobile) {
    toggleMobile.addEventListener("click", toggleDarkMode);
}

const aboutText = `Beyond coding, I enjoy turning ideas into real products that solve problems and make
life easier for users. I thrive in collaborative environments, continuously learning and experimenting with new
technologies to deliver innovative solutions. My portfolio showcases projects that demonstrate my skills in full-stack
development, UI/UX implementation, and performance optimization, reflecting my dedication to building high-quality web
experiences.`;
const aboutButton = document.querySelector(".more2");
const secondPara = document.querySelector(".second-para");

if (aboutButton && secondPara) {
    let expanded = false;

    aboutButton.addEventListener("click", (event) => {
        event.preventDefault();
        expanded = !expanded;
        secondPara.textContent = expanded ? aboutText : "";
        aboutButton.textContent = expanded ? "Less About Me" : "More About Me";
    });
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    const closeMobileMenu = () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            closeMobileMenu();
        }
    });
}