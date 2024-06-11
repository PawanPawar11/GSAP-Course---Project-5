function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y:-30,
        delay:0.5,
        duration:0.7,
        opacity:0,
        stagger:0.15
    })
    tl.from(".center-part1 h1", {
        x: -300,
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part1 p", {
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 button", {
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part2 img", {
        y:100,
        opacity:0,
        duration:0.5
    },"-=0.3")
    tl.from(".section1bottom img", {
        y:30,
        opacity:0,
        duration:0.6,
        stagger:0.15
    })
}

function page2Animation() {
    var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
})

    tl2.from(".services", {
        y:30,
        opacity:0,
        duration:0.5
    })

    tl2.from(".section2 .container .block1", {
        x:-400,
        opacity:0,
        duration:1
    }, 'a')
    tl2.from(".section2 .container .block2", {
        x:400,
        opacity:0,
        duration:1
    }, 'a')

    tl2.from(".section2 .container .block3", {
        x:-400,
        opacity:0,
        duration:1
    }, 'b')
    tl2.from(".section2 .container .block4", {
        x:400,
        opacity:0,
        duration:1
    }, 'b')
}

// function page3Animation() {
//     var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger:".section3 .center",
//         scroller:"body",
//         start:"top 50%",
//         end:"top 25%",
//         scrub:2
//     }
// })

//     tl3.from(".section3 .center .center-part1 h1", {
//         x: -300,
//         opacity:0,
//         duration:1
//     })
//     tl3.from(".section3 .center .center-part1 p", {
//         x:-100,
//         opacity:0,
//         duration:0.8
//     })
//     tl3.from(".section3 .center .center-part1 button", {
//         opacity:0,
//         duration:0.8
//     })
//     tl3.from(".section3 .center .center-part2 img", {
//         y:100,
//         opacity:0,
//         duration:0.5
//     },"-=0.3")
// }

function page4Animation() {
    var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger:".internationalServices",
        scroller:"body",
        start:"top 50%",
        end:"top 25%",
        scrub:2
    }
})

    tl4.from(".leftPart p, .centerPart p, .rightPart p", {
        x:-100,
        opacity:0,
        duration:3,
        stagger:0.5
    })

    tl4.from(".leftPart h4, .centerPart h4, .rightPart h4", {
        opacity:0,
    })
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

page1Animation()
page2Animation()
// page3Animation()
page4Animation()
loco()
