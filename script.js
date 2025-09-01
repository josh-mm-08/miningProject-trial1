document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".area-bttn, .mine-box");
    const backButtons = document.querySelectorAll(".back-bttn");
    const sections = document.querySelectorAll("section");

    function showSection(id) {
        sections.forEach(sec => sec.style.display = "none");
        const target = document.getElementById(id);
        if (target) {
            target.style.display = "block";
            target.classList.add("fade-in");
            setTimeout(() => target.classList.remove("fade-in"), 500);

            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // Botones de navegación
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            if (target) {
                btn.classList.add("active");
                setTimeout(() => btn.classList.remove("active"), 200);
                showSection(target);
            }
        });
    });

    // Botones de volver
    backButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showSection("home");
        });
    });
});
