(() => {
    'use strict';
    const animate = {};

    /**
     * Fades out an element by reducing its opacity to 0 and then hiding it.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.fadeOut(document.querySelector('.my-element'));
     */
    animate.fadeOut = (elem) => {
        elem.style.opacity = 0;
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Zooms out an element by scaling it down and then hiding it.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.zoomOut(document.querySelector('.my-element'));
     */
    animate.zoomOut = (elem) => {
        elem.style.transform = "scale(0.1)";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Slides an element out to the right while fading it.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.slideOut(document.querySelector('.my-element'));
     */
    animate.slideOut = (elem) => {
        elem.style.transform = "translateX(100%)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Rotates an element 360 degrees while scaling it down to zero.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.rotateOut(document.querySelector('.my-element'));
     */
    animate.rotateOut = (elem) => {
        elem.style.transform = "rotate(360deg) scale(0)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Shrinks and fades out an element simultaneously.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.shrinkAndFadeOut(document.querySelector('.my-element'));
     */
    animate.shrinkAndFadeOut = (elem) => {
        elem.style.transform = "scale(0.1)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Flips an element 90 degrees around its Y axis while fading out.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.flipOut(document.querySelector('.my-element'));
     */
    animate.flipOut = (elem) => {
        elem.style.transform = "rotateY(90deg)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

    /**
     * Creates a bounce effect before scaling down to zero.
     * Uses a custom cubic-bezier timing function for the bounce effect.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.bounceOut(document.querySelector('.my-element'));
     */
    animate.bounceOut = (elem) => {
        elem.style.transition = "all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        elem.style.transform = "scale(1.2)";
        setTimeout(() => {
            elem.style.transform = "scale(0)";
            elem.style.opacity = "0";
        }, 300);
        setTimeout(() => {
            elem.style.display = "none";
        }, 600);
    }

    /**
     * Combines a slide and rotation animation while fading out.
     * @param {HTMLElement} elem - The DOM element to animate
     * @example
     * animate.slideAndRotateOut(document.querySelector('.my-element'));
     */
    animate.slideAndRotateOut = (elem) => {
        elem.style.transform = "translateX(100%) rotate(360deg)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.display = "none";
        }, 300);
    }

        /**
     * Rotates an element 360 degrees while scaling it, then hides it.
     * @param {HTMLElement} elem - The DOM element to animate.
     * @param {string} scale - The target scale (e.g., '0' for shrinking, '2' for enlarging).
     * @param {number} duration - The duration of the animation in milliseconds.
     * @example
     * animate.rotateAndScale(document.querySelector('.my-element'), '0.5', 500);
     */
    animate.rotateAndScale = (elem, scale = "0.5", duration = 500) => {
        elem.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
        elem.style.transform = `rotate(360deg) scale(${scale})`;
        elem.style.opacity = "0";

        setTimeout(() => {
            elem.style.display = "none";
        }, duration);
    };
    window.animate = animate;
})();