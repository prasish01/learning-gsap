function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav a, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.1,
  });

  tl.from(".center-part1 h1", { x: -200, opacity: 0, duration: 0.5 }, "-=0.3");
  tl.from(".center-part1 p", { x: -100, opacity: 0, duration: 0.4 });
  tl.from(".center-part1 button", { opacity: 0, duration: 0.4 });
  tl.from(".center-part2", { opacity: 0, duration: 0.4, x: 200 }, "-=0.7");
  tl.from(".section1bottom img", { opacity: 0, y: 30, stagger: 0.15 }, "-=0.6");
}
function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services ", {
    y: 30,
    opacity: 0,
    duration: 0.6,
  });

  tl2.from(".elem.line1.left", { x: -300, opacity: 0, duration: 1 }, "top");
  tl2.from(".elem.line1.right", { x: 300, opacity: 0, duration: 1 }, "top");
  tl2.from(".elem.line2.left", { x: -300, opacity: 0, duration: 1 }, "bottom");
  tl2.from(".elem.line2.right", { x: 300, opacity: 0, duration: 1 }, "bottom");
}
page1Animation();
page2Animation();
