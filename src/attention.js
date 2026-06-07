import { ensureElement, play, clearAnimations } from './helpers.js';
import { EASE } from './easing.js';

export const pulse = (elem, duration = 600, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(1.15)', offset: 0.5 },
        { transform: 'scale(1)', offset: 1 },
    ], { duration, easing: EASE.IN_OUT }).then(() => {
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const shake = (elem, duration = 500, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'translateX(0)', offset: 0 },
        { transform: 'translateX(-8px)', offset: 0.1 },
        { transform: 'translateX(8px)', offset: 0.2 },
        { transform: 'translateX(-8px)', offset: 0.3 },
        { transform: 'translateX(8px)', offset: 0.4 },
        { transform: 'translateX(-8px)', offset: 0.5 },
        { transform: 'translateX(8px)', offset: 0.6 },
        { transform: 'translateX(-8px)', offset: 0.7 },
        { transform: 'translateX(8px)', offset: 0.8 },
        { transform: 'translateX(-8px)', offset: 0.9 },
        { transform: 'translateX(0)', offset: 1 },
    ], { duration }).then(() => {
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};

export const swing = (elem, duration = 500, callback) => {
    ensureElement(elem);
    elem.style.transformOrigin = 'top center';
    return play(elem, [
        { transform: 'rotate(0deg)', offset: 0 },
        { transform: 'rotate(15deg)', offset: 0.25 },
        { transform: 'rotate(-10deg)', offset: 0.5 },
        { transform: 'rotate(5deg)', offset: 0.75 },
        { transform: 'rotate(0deg)', offset: 1 },
    ], { duration }).then(() => {
        clearAnimations(elem);
        elem.style.transformOrigin = '';
        if (callback) callback(elem);
        return elem;
    });
};

export const wobble = (elem, duration = 600, callback) => {
    ensureElement(elem);
    return play(elem, [
        { transform: 'translateX(0) rotate(0deg)', offset: 0 },
        { transform: 'translateX(-25%) rotate(-5deg)', offset: 0.2 },
        { transform: 'translateX(20%) rotate(3deg)', offset: 0.4 },
        { transform: 'translateX(-15%) rotate(-3deg)', offset: 0.6 },
        { transform: 'translateX(10%) rotate(2deg)', offset: 0.8 },
        { transform: 'translateX(0) rotate(0deg)', offset: 1 },
    ], { duration }).then(() => {
        clearAnimations(elem);
        if (callback) callback(elem);
        return elem;
    });
};
