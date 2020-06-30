// Variable Declarations and Function Definitions 
//____________________________________________________________________
/**
 * Homepage Variables
 */

/**
 * About Page Variables
 */
let myAnim

//____________________________________________________________________

/**
 * Global Page Functions
 */

/**
 * Homepage Functions
 */

/**
 * About Page Functions
 */
const aboutInit = () => {
    console.log('We have lift off ')
    const allClasses = [...document.querySelectorAll('[class]')]
    console.log(allClasses.length)
    // allClasses.map(classes => console.log(classes.className.split(' ')))
    // .some(c => /gsap-.*/.test(c))
    // console.log(allClasses , allClasses.length)
    myAnim = undefined
    if(typeof myAnim === "undefined") {
        // setTimeout(scroll_facts_tl_func , 10)
        horizontalScrollAnim();
    }
    // gsap.to(face , {
    //     attr: { viewBox: face_viewBox },
    //     duration: 3
    // })
}

const horizontalScrollAnim = () => {
    const facts = [...document.querySelectorAll('.fact')];
    console.log(facts)

    myAnim = gsap.to(facts, {
        xPercent: -115 * (facts.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".factsContainer",
            pin: true,
            markers: true,
            scrub: 1,
            snap: 1 / (facts.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end:  `+=4320`
        }
    });
}

//____________________________________________________________________

// Helper Methods
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//____________________________________________________________________

// Initialization Methods
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
        },
    }],
    views: [
        {
            namespace: 'about',
            afterEnter() {
                aboutInit()
            },
        }
    ],
});

//____________________________________________________________________