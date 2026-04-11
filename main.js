var typed = new Typed(".text", {
    strings: ["Video Editor", "Web Developer", "Graphic Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Optionally switch the icon between moon and sun
    if (body.classList.contains("dark-mode")) {
        toggle.classList.replace("bx-moon", "bx-sun");
    } else {
        toggle.classList.replace("bx-sun", "bx-moon");
    }
});
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