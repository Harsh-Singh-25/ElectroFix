const themeToggle = document.getElementById("themeToggle");

// Apply saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) {
        themeToggle.checked = true;
    }
}

// Listen for toggle change
if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
}