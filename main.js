const scrollAnimation = () => {
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
}

scrollAnimation()
barba.init({
    sync: true,
    transitions: [{
        name: 'transition-base',
        async leave() {
            const done = this.async();
            await delay(1000);
            done();
        },
        async enter() {
            window.scrollTo(0, 0);
        },
    }],
    views: [
        {
            namespace: 'about',
            beforeEnter(data) {
            },
            afterEnter() {
                scrollAnimation();
            },
        }
    ],
});