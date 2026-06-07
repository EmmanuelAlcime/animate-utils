export const ensureElement = (elem) => {
    if (!elem || !(elem instanceof HTMLElement)) {
        throw new Error(`Animate.js: expected HTMLElement, got ${elem}`);
    }
};

export const play = (elem, keyframes, options = {}) => {
    const anim = elem.animate(keyframes, {
        duration: options.duration ?? 300,
        easing: options.easing ?? 'ease',
        fill: 'forwards',
    });
    return anim.finished.catch(() => {});
};

export const clearAnimations = (elem) => {
    elem.getAnimations().forEach(a => a.cancel());
};

export const animateOut = (elem, keyframes, duration = 300, easing = 'ease', callback) => {
    ensureElement(elem);
    return play(elem, keyframes, { duration, easing }).then(() => {
        elem.style.display = 'none';
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const animateIn = (elem, keyframes, duration = 300, easing = 'ease', callback) => {
    ensureElement(elem);
    elem.style.display = '';
    return play(elem, keyframes, { duration, easing }).then(() => {
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const reset = (elem) => {
    ensureElement(elem);
    clearAnimations(elem);
    elem.style.display = '';
};
