// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

var cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.x,
    y: e.y,
  });
});

tl.from("nav .logo", {
  y: -40,
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
})
  .from(".nav-elements h4 , .nav-elements button", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
  })
  .from(".part1 h1", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  })
  .from(".contet-div p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  })
  .from(".btn-div button", {
    opacity: 0,
    duration: 0.4,
  })
  .from(
    ".part2 img",
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
    },
    "-=1.1"
  );

tl.from(" .logos img", {
  x: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".logos",
    start: "top 60%",
    end: "top 10%",
    scrub: 1,
  },
});

tl.from(".page4 ", {
  y: 30,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: ".services",
    start: "top 70%",
    end: "top 30%",
  },
});

tl.from(".animte-1", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".animte-1",
    start: "top 80%",
    end: "top 0%",
    scrub: 2,
  },
});
tl.from(
  ".animate-2",
  {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".animate-2",
      start: "top 80%",
      end: "top 0%",
      scrub: 2,
    },
  },
  "-=1.1"
);

tl.from(".page6", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page6",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

tl.from(".display-none", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".display-none",
    start: "top 60%",
    end: "top 30%",
  },
});

tl.from(".page7", {
  duration: 0.5,
  x: -500,
  scrollTrigger: {
    trigger: ".page7",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

tl.from(".card-content ", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card-content ",
    start: "top 80%",
    end: "top 90%",
    scrub: 1,
  },
});
