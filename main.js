let myAnim
let secondOne
const scrollAnimation = () => {
    const pages = [...document.querySelectorAll('.page')],
    container = document.querySelector(".container")

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

const factsScrollAnimation = (facts, container) => {
    facts = [...document.querySelectorAll('.fact')],
    container = document.querySelector('.biggerContainer')

    console.log(facts , container)
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

$(document).ready(()=> {
    console.log('The DOM is Ready')
    if(typeof secondOne === "undefined") {
        const facts = [...document.querySelectorAll('.fact')],
        container = document.querySelector('.biggerContainer')
        factsScrollAnimation(facts,container)
    }
})

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
        async afterEnter() {
            document.documentElement.scrollTop = 0;
            // barba.on('newPageReady', ()=> {
            //     factsScrollAnimation();
            // })
            // ScrollTrigger.refresh()
            const facts = [...document.querySelectorAll('.fact')],
            container = document.querySelector('.biggerContainer')
            scrollAnimation
            setTimeout(factsScrollAnimation(facts,container ), 2000000);
        },
    }],
});

barba.hooks.beforeOnce(()=> {
    console.log('Before The One Time')
})

barba.hooks.once(()=>{
    console.log('One Time for the bois')
})

barba.hooks.afterOnce(()=> {
    console.log('After The One Time')
})

barba.hooks.before(()=>{
    console.log('Before it all kicks off ahhhh')
})

barba.hooks.beforeLeave(()=> {
    console.log('Before Leaving')
})

barba.hooks.leave(()=> {
    console.log('Leaving')
})

barba.hooks.afterLeave(()=> {
    console.log('After Leaving Syanara')
})

barba.hooks.beforeEnter(()=> {
    console.log('Before Entering')
})

barba.hooks.enter(()=> {
    console.log('Entering Bois')
})

barba.hooks.afterEnter(()=> {
    console.log('After Entering')
})

barba.hooks.after(()=> {
    console.log('After everything , dust is settling now lol')
})







