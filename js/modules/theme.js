/* ── THEME TOGGLE ─────────────────────────────── */
const html = document.documentElement;
const btn = document.getElementById("themeBtn");
html.setAttribute("data-theme", localStorage.getItem("theme") || "light");

btn.addEventListener("click", () => {
    const next =
        html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.25) rotate(15deg)" },
            { transform: "scale(1) rotate(0deg)" },
        ],
        { duration: 380, easing: "cubic-bezier(0.34,1.56,0.64,1)" },
    );
});
