import gsap from "gsap"

const childComponentSelector = (ref, selector) => {
    return gsap.utils.selector(ref)(selector)
}

export {
    childComponentSelector
}