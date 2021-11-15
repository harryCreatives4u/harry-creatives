gsap.registerPlugin(ScrollTrigger);

// //////////////////////////////////////////////////////////

console.log("ani start");

const textContainers = gsap.utils.toArray(".intro-text");
textContainers.forEach((text) => {
  gsap.to(text, {
    opacity: -1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: text,
      pin: true,
      scrub: true,
    },
  });
});
// ////////////////////////////////////////////////////
// ///////////////////////////////////-----------------------
// -------------------------------------------------------------
// graphic design portfolio

let portfolioSections = gsap.utils.toArray(".panel");

// gsap.to(portfolioSections, {
//   xPercent: -100 * (portfolioSections.length - 1),
//   ease: "none",
//   duration: 0.1,
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (portfolioSections.length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth,
//   },
// });

// gsap.to(portfolioSections, {
//   xPercent: -100 * (portfolioSections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gd-portfolio",
//     pin: true,
//     start: "top",
//     // markers: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".container").offsetWidth / 4,
//   },
// });

const slides = document.querySelectorAll(".fromRight");

const action = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#gdn-container",
      pin: true,
      scrub: 0.3,
      start: "top top",
      end: "+=3000",
    },
  })
  .to(slides, { xPercent: -100, duration: 2, ease: "none", stagger: 3 })
  .to({}, { duration: 1 }); // an empty tween to generate a pause at the end

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////loading section

const loadContainer = "#web-dev-loading";

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#web-dev-loading",
      start: "center center",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  })
  .fromTo(
    ".loader-text2",
    { y: loadContainer.innerHeight * -0.2, opacity: 0, delay: 2, duration: 5 },
    { y: loadContainer.innerHeight * 2, opacity: 1, delay: 2, duration: 5 }
  )
  .fromTo(
    ".loader-text3",
    { y: loadContainer.innerHeight * -0.2, opacity: 0, delay: 2, duration: 5 },
    { y: loadContainer.innerHeight * 2, opacity: 1, delay: 2, duration: 5 }
  )
  .fromTo(
    ".loader-text4",
    { y: loadContainer.innerHeight * -0.2, opacity: 0, delay: 2, duration: 5 },
    { y: loadContainer.innerHeight * 2, opacity: 1, delay: 2, duration: 5 }
  )
  .fromTo(
    ".loader-text5",
    { y: loadContainer.innerHeight * -0.2, opacity: 0, delay: 2, duration: 5 },
    { y: loadContainer.innerHeight * 2, opacity: 1, delay: 2, duration: 5 }
  );

// ///////////////////////////////////-----------------------
// -------------------------------------------------------------
// snap to section

const sections = document.querySelectorAll(".sec");

function goToSection(section, anim) {
  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration: 1,
  });

  anim && anim.restart();
}

sections.forEach((section) => {
  const intoAnim = gsap.from(section.querySelector(".right-col"), {
    yPercent: 50,
    duration: 1,
    paused: true,
  });

  ScrollTrigger.create({
    trigger: section,
    end: "bottom top+=1",
    onEnter: () => goToSection(section, intoAnim),
    onEnterBack: () => goToSection(section),
  });
});

// ///////////////////////////////////-----------------------
// //////////////////////////////////////////////
// ----------------------------------------floating animation

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const cans = gsap.utils.toArray("#mk-sec2 > img");
cans.forEach((can) => {
  gsap.set(can, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1),
  });

  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
