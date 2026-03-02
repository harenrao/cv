window.addEventListener("load", () => {
  const items = document.querySelectorAll(".hero-inner > *");
  items.forEach((el, i) => {
    el.animate(
      [
        { opacity: 0, transform: "translateY(40px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 900,
        delay: i * 120,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );
  });
});
