let isOpen = false;

document.getElementById("ham").addEventListener("click", () => {
  const tl = gsap.timeline({
    defaults: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  });

  let mm = gsap.matchMedia();

  mm.add("(max-width: 1023px)", () => {
    if (!isOpen) {
      tl.to("#line1", { y: 6, rotate: 45, backgroundColor: "white" }, 0)
        .to("#line2", { opacity: 0 }, 0)
        .to("#line3", { y: -6, rotate: -45, backgroundColor: "white" }, 0)
        .to(
          "#nav",
          {
            width: "100%",
            pointerEvents: "auto",
            paddingTop: "6rem",
          },
          0
        )
        .fromTo(
          "#nav-item",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1 },
          0.5
        )
    } else {
      tl.to("#line1", { y: 0, rotate: 0, backgroundColor: "#6B7280" }, 0)
        .to("#line2", { opacity: 1 }, 0)
        .to("#line3", { y: 0, rotate: 0, backgroundColor: "#6B7280" }, 0)
        .to(
          "#nav",
          { width: "0", pointerEvents: "none", paddingLeft: 0, paddingTop: 0 },
          0
        )
    }
  });

  isOpen = !isOpen;
});

document.querySelectorAll("#nav a").forEach((link) => {
  let mm = gsap.matchMedia();
  mm.add("(max-width: 1023px)", () => {
    link.addEventListener("click", () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
      });
      tl.to("#nav", { width: "0", pointerEvents: "none" }, 0)
        .to("#line1", { y: 0, rotate: 0, backgroundColor: "#6B7280" }, 0)
        .to("#line2", { opacity: 1 }, 0)
        .to("#line3", { y: 0, rotate: 0, backgroundColor: "#6B7280" }, 0);
      isOpen = false;
    });
  });
});
