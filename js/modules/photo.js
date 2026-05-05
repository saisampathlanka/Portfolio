/* ── PHOTO: continuous float + mouse parallax via rAF ── */
const photoFloat = document.querySelector(".photo-float");
if (photoFloat) {
    let mouseX = 0,
        mouseY = 0;
    document.addEventListener(
        "mousemove",
        (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        },
        { passive: true },
    );

    (function animatePhoto() {
        const t = Date.now() / 1000;
        const bob = Math.sin(t * 1.05) * 9;
        const tx = mouseX * 6;
        const ty = mouseY * 4 + bob;
        photoFloat.style.transform = `translate(${tx}px, ${ty}px)`;
        requestAnimationFrame(animatePhoto);
    })();
}
