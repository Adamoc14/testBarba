let pages = [...document.querySelectorAll('.page')]
gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        markers: true,
        scrub: 1,
        snap: 1 / (pages.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".container").offsetWidth
    }
});