let myAnim
let secondOne
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

const factsScrollAnimation = () => {
    const facts = [...document.querySelectorAll('.fact')],
    container = document.querySelector('.biggerContainer');

    secondOne = gsap.to(facts, {
        xPercent: -100 * (facts.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (facts.length - 1),
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

if(typeof secondOne === "undefined") {
    factsScrollAnimation()
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
            setTimeout(factsScrollAnimation, 10);
        },
    }],
});