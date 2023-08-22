gsap.registerPlugin(ScrollTrigger);

function createRevealAnimation(className, delayDuration) {
    gsap.utils.toArray(className).forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 15%",
            markers: false,
            onEnter: function () {
                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    {
                        delay: delayDuration,
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "expo",
                        overwrite: "auto"
                    }
                );
            },
            onLeave: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
                gsap.fromTo(
                    elem,
                    { y: -100, autoAlpha: 0 },
                    {
                        delay: delayDuration,
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "expo",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function () {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
    });
}

// Use the function for different classes and desired delays
createRevealAnimation(".revealUp", 0);    // No delay
createRevealAnimation(".revealUp1", 0.2); // 0.2s delay
createRevealAnimation(".revealUp2", 0.4); // 0.4s delay
