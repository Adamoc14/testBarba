let myAnim;
const scrollAnimation = () => {
    const pages = [...document.querySelectorAll('.page')],
    container = document.querySelector(".container");

    myAnim = gsap.to(pages, {
        xPercent: -100 * (pages.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (pages.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + container.offsetWidth
        }
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

if (typeof myAnim === "undefined") {
    scrollAnimation();
}

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
            document.documentElement.scrollTop = 0;
            setTimeout(scrollAnimation, 10);
        },
    }],
});