window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      ease: "none",
      duration: 3,
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      ease: "none",
      duration: 2,
      repeat: -1,
    });

    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
