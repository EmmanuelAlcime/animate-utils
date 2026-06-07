import { animateOut, ensureElement, play, clearAnimations } from './helpers.js';
import { EASE } from './easing.js';

export const fadeOut = (elem, duration = 300, callback) => {
    return animateOut(elem, [
        { opacity: 1 },
        { opacity: 0 },
    ], duration, 'ease', callback);
};

export const zoomOut = (elem, duration = 300, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.1)' },
    ], duration, 'ease', callback);
};

export const slideOut = (elem, duration = 300, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' },
    ], duration, 'ease', callback);
};

export const rotateOut = (elem, duration = 400, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'rotate(0deg) scale(1)' },
        { opacity: 0, transform: 'rotate(360deg) scale(0)' },
    ], duration, 'ease', callback);
};

export const shrinkAndFadeOut = (elem, duration = 300, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.1)' },
    ], duration, 'ease', callback);
};

export const flipOut = (elem, duration = 400, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'rotateY(0deg)' },
        { opacity: 0, transform: 'rotateY(90deg)' },
    ], duration, 'ease', callback);
};

export const bounceOut = (elem, duration = 600, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'scale(1)', opacity: 1, offset: 0, easing: EASE.BOUNCE },
        { transform: 'scale(1.2)', opacity: 1, offset: 0.5, easing: EASE.IN },
        { transform: 'scale(0)', opacity: 0, offset: 1 },
    ], { duration }).then(() => {
        elem.style.display = 'none';
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const slideAndRotateOut = (elem, duration = 400, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'translateX(0) rotate(0deg)' },
        { opacity: 0, transform: 'translateX(100%) rotate(360deg)' },
    ], duration, 'ease', callback);
};

export const dropOut = (elem, duration = 400, callback) => {
    return animateOut(elem, [
        { opacity: 1, transform: 'translateY(0) scale(1)' },
        { opacity: 0, transform: 'translateY(100%) scale(0.8)' },
    ], duration, EASE.IN, callback);
};

export const lightSpeedOut = (elem, duration = 400, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'translateX(0) skewX(0deg)', opacity: 1 },
        { transform: 'translateX(100%) skewX(-30deg)', opacity: 0 },
    ], { duration, easing: EASE.IN }).then(() => {
        elem.style.display = 'none';
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const blurOut = (elem, duration = 400, callback) => {
    return animateOut(elem, [
        { opacity: 1, filter: 'blur(0px)' },
        { opacity: 0, filter: 'blur(8px)' },
    ], duration, 'ease', callback);
};

export const rotateAndScale = (elem, scale = '0.5', duration = 500, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'rotate(0deg) scale(1)', opacity: 1 },
        { transform: `rotate(360deg) scale(${scale})`, opacity: 0 },
    ], { duration }).then(() => {
        elem.style.display = 'none';
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};
