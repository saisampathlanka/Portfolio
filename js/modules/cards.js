/* ── CURSOR SPOTLIGHT ON CARDS ───────────────── */
document
    .querySelectorAll(".proj-card, .exp-card")
    .forEach((card) => {
        const isProj = card.classList.contains("proj-card");
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            card.style.setProperty(isProj ? "--px" : "--cx", x + "px");
            card.style.setProperty(isProj ? "--py" : "--cy", y + "px");
        });
    });

/* ── 3D TILT ON PROJECT CARDS ────────────────── */
document.querySelectorAll("[data-tilt]").forEach((card) => {
    let raf;
    card.addEventListener("mousemove", (e) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateZ(10px)`;
            card.style.transition =
                "transform 0.08s ease, box-shadow 0.32s, border-color 0.32s";
        });
    });
    card.addEventListener("mouseleave", () => {
        cancelAnimationFrame(raf);
        card.style.transition =
            "transform 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.32s, border-color 0.32s";
        card.style.transform =
            "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    });
});
