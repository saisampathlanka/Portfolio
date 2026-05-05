/* ── SNOW PARTICLES ─────────────────────────── */
const sc = document.getElementById("snowflakes");
for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.className = "snowflake";
    const s = Math.random() * 3 + 1.5;
    el.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * -15}%;
        width:${s}px; height:${s}px;
        animation-duration:${Math.random() * 18 + 14}s;
        animation-delay:${Math.random() * -28}s;
    `;
    sc.appendChild(el);
}
