var tl = gsap.timeline();

tl.from("nav .logo", {
    y:-40,
    opacity: 0,
    duration: 0.7,
    delay:0.2

})
tl.from(".nav-elements h4 , .nav-elements button", {
    y:-30,
    opacity: 0,
    duration: 0.7,
    stagger:0.2,
})

tl.from(".part1 h1", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    
})
tl.from(".contet-div p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    
})
tl.from(".btn-div button", {
    
    opacity: 0,
    duration: 0.4,
    
})

tl.from(".part2 img", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    
}, "-=1.1")


tl.from(".page3 .logos img",{
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page3 .logos img",
        scroller: "body",
        start: "top 80%",
        end: "bottom 10%",
        markers: true
    }
    
})