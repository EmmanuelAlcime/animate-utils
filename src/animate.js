export { fadeIn, zoomIn, slideIn, rotateIn, flipIn, bounceIn } from './entrance.js';
export { fadeOut, zoomOut, slideOut, rotateOut, shrinkAndFadeOut, flipOut, bounceOut, slideAndRotateOut, dropOut, lightSpeedOut, blurOut, rotateAndScale } from './exit.js';
export { pulse, shake, swing, wobble } from './attention.js';
export { reset } from './helpers.js';
export { EASE } from './easing.js';

export { animateIn, animateOut, play, clearAnimations, ensureElement } from './helpers.js';

import { fadeIn, zoomIn, slideIn, rotateIn, flipIn, bounceIn } from './entrance.js';
import { fadeOut, zoomOut, slideOut, rotateOut, shrinkAndFadeOut, flipOut, bounceOut, slideAndRotateOut, dropOut, lightSpeedOut, blurOut, rotateAndScale } from './exit.js';
import { pulse, shake, swing, wobble } from './attention.js';
import { reset } from './helpers.js';

const animate = Object.freeze({
    fadeIn, zoomIn, slideIn, rotateIn, flipIn, bounceIn,
    fadeOut, zoomOut, slideOut, rotateOut, shrinkAndFadeOut, flipOut, bounceOut, slideAndRotateOut, dropOut, lightSpeedOut, blurOut, rotateAndScale,
    pulse, shake, swing, wobble,
    reset,
});

export default animate;

window.animate = animate;
