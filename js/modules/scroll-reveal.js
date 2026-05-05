/* ── SCROLL REVEAL ───────────────────────────── */
const ioReveal = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("visible");
            ioReveal.unobserve(e.target);
        });
    },
    { threshold: 0.1 },
);
document
    .querySelectorAll(".reveal")
    .forEach((el) => ioReveal.observe(el));
