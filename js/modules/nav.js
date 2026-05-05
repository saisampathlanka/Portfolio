/* ── NAV DOCK ON SCROLL ──────────────────────── */
const nav = document.getElementById("mainNav");
const dockNav = () =>
    nav.classList.toggle("docked", window.scrollY > 70);
window.addEventListener("scroll", dockNav, { passive: true });
dockNav();

/* ── ACTIVE NAV LINK ─────────────────────────── */
const navLinks = document.querySelectorAll(".nav-pill a");
const ioActive = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            navLinks.forEach((l) => l.classList.remove("active"));
            const a = document.querySelector(
                `.nav-pill a[href="#${e.target.id}"]`,
            );
            if (a) a.classList.add("active");
        });
    },
    { threshold: 0.38 },
);
document
    .querySelectorAll("section[id]")
    .forEach((s) => ioActive.observe(s));
