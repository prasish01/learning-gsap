const breakWords = () => {
  const heading = document.querySelector("#heading");
  const headingText = document.querySelector("#heading").textContent;
  const splittedText = headingText.split("");
  let halfValue = splittedText.length / 2;
  let clutter = "";

  splittedText.forEach((letter, index) => {
    if (index < halfValue) clutter += `<span class='start'>${letter}</span>`;
    else clutter += `<span class='end'>${letter}</span>`;
  });

  heading.innerHTML = clutter;
};

breakWords();

gsap.from(".start", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from(".end", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
});
