gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#images-1",
  { y: 70 },
  {
    y: -100,
    scrollTrigger: {
      trigger: "#images-1",
      start: "top center",
      end: "+=1200",
      scrub: true,
      markers: true,
    },
  }
);

gsap.fromTo(
  "#images-2",
  { y: -200 },
  {
    y: -120, // moves down
    delay: 2,
    scrollTrigger: {
      trigger: "#images-2",
      start: "top center",
      end: "+=1200",
      scrub: true,
      markers: true,
    },
  }
);

gsap.fromTo(
  "#images-3",
  { y: 70 },
  {
    y: -100, // moves up
    delay: 3,
    scrollTrigger: {
      trigger: "#images-3",
      start: "top center",
      end: "+=1200",
      scrub: true,
      markers: true,
    },
  }
);
