document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Vérifier si l'utilisateur a déjà un mode préféré
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "🌙";
    }

    // Événement pour basculer le mode
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "dark");
            
        } else {
            themeIcon.textContent = "🌞";
            localStorage.setItem("theme", "light");
        }
    });
});
