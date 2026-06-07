import { animateIn, ensureElement, play, clearAnimations } from './helpers.js';
import { EASE } from './easing.js';

export const fadeIn = (elem, duration = 300, callback) => {
    return animateIn(elem, [
        { opacity: 0 },
        { opacity: 1 },
    ], duration, 'ease', callback);
};

export const zoomIn = (elem, duration = 300, callback) => {
    return animateIn(elem, [
        { opacity: 0, transform: 'scale(0.3)' },
        { opacity: 1, transform: 'scale(1)' },
    ], duration, EASE.OUT, callback);
};

export const slideIn = (elem, duration = 300, callback) => {
    return animateIn(elem, [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ], duration, 'ease', callback);
};

export const rotateIn = (elem, duration = 400, callback) => {
    return animateIn(elem, [
        { opacity: 0, transform: 'rotate(-200deg) scale(0.3)' },
        { opacity: 1, transform: 'rotate(0deg) scale(1)' },
    ], duration, EASE.OUT, callback);
};

export const flipIn = (elem, duration = 400, callback) => {
    return animateIn(elem, [
        { opacity: 0, transform: 'rotateY(90deg) scale(0.8)' },
        { opacity: 1, transform: 'rotateY(0deg) scale(1)' },
    ], duration, EASE.OUT, callback);
};

export const bounceIn = (elem, duration = 600, callback) => {
    ensureElement(elem);
    elem.style.display = '';
    return play(elem, [
        { transform: 'scale(0.3)', opacity: 0, offset: 0, easing: EASE.OUT },
        { transform: 'scale(1.08)', opacity: 1, offset: 0.33, easing: EASE.IN },
        { transform: 'scale(0.95)', opacity: 1, offset: 0.58, easing: EASE.OUT },
        { transform: 'scale(1.02)', opacity: 1, offset: 0.75, easing: EASE.OUT },
        { transform: 'scale(1)', opacity: 1, offset: 1 },
    ], { duration }).then(() => {
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};
