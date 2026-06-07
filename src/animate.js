(() => {
    'use strict';

    const animate = {};

    const setTransition = (elem, duration, timing = 'ease') => {
        elem.style.transition = `all ${duration}ms ${timing}`;
    };

    const clearTransition = (elem) => {
        elem.style.transition = '';
    };

    const reflow = (elem) => { void elem.offsetHeight; };

    const hide = (elem) => {
        elem.style.display = 'none';
    };

    const show = (elem) => {
        elem.style.display = '';
    };

    const resetStyles = (elem, props = ['opacity', 'transform', 'filter']) => {
        props.forEach(p => { elem.style[p] = ''; });
    };

    /**
     * @param {HTMLElement} elem
     * @param {Object} props - style properties to apply
     * @param {number} duration - ms
     * @param {string} timing - CSS timing function
     * @param {Function} [callback]
     * @returns {Promise}
     */
    const animateOut = (elem, props, duration = 300, timing = 'ease', callback) => {
        return new Promise((resolve) => {
            setTransition(elem, duration, timing);
            Object.assign(elem.style, props);
            setTimeout(() => {
                hide(elem);
                clearTransition(elem);
                resetStyles(elem);
                if (callback) callback(elem);
                resolve(elem);
            }, duration);
        });
    };

    /**
     * @param {HTMLElement} elem
     * @param {Object} startProps - initial style properties
     * @param {Object} endProps - final style properties
     * @param {number} duration - ms
     * @param {string} timing - CSS timing function
     * @param {Function} [callback]
     * @returns {Promise}
     */
    const animateIn = (elem, startProps, endProps, duration = 300, timing = 'ease', callback) => {
        return new Promise((resolve) => {
            show(elem);
            Object.assign(elem.style, startProps);
            reflow(elem);
            setTransition(elem, duration, timing);
            Object.assign(elem.style, endProps);
            setTimeout(() => {
                clearTransition(elem);
                resetStyles(elem);
                if (callback) callback(elem);
                resolve(elem);
            }, duration);
        });
    };

    // ── Entrance Animations ──

    animate.fadeIn = (elem, duration = 300, callback) => {
        return animateIn(elem, { opacity: 0 }, { opacity: 1 }, duration, 'ease', callback);
    };

    animate.zoomIn = (elem, duration = 300, callback) => {
        return animateIn(elem, { opacity: 0, transform: 'scale(0.3)' }, { opacity: 1, transform: 'scale(1)' }, duration, 'ease-out', callback);
    };

    animate.slideIn = (elem, duration = 300, callback) => {
        return animateIn(elem, { opacity: 0, transform: 'translateX(-100%)' }, { opacity: 1, transform: 'translateX(0)' }, duration, 'ease', callback);
    };

    animate.rotateIn = (elem, duration = 400, callback) => {
        return animateIn(elem, { opacity: 0, transform: 'rotate(-200deg) scale(0.3)' }, { opacity: 1, transform: 'rotate(0deg) scale(1)' }, duration, 'ease-out', callback);
    };

    animate.flipIn = (elem, duration = 400, callback) => {
        return animateIn(elem, { opacity: 0, transform: 'rotateY(90deg) scale(0.8)' }, { opacity: 1, transform: 'rotateY(0deg) scale(1)' }, duration, 'ease-out', callback);
    };

    animate.bounceIn = (elem, duration = 600, callback) => {
        return new Promise((resolve) => {
            show(elem);
            elem.style.transform = 'scale(0.3)';
            elem.style.opacity = '0';
            reflow(elem);

            setTransition(elem, 200, 'ease-out');
            elem.style.transform = 'scale(1.08)';
            elem.style.opacity = '1';

            setTimeout(() => {
                setTransition(elem, 150, 'ease-in');
                elem.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    setTransition(elem, 100, 'ease-out');
                    elem.style.transform = 'scale(1.02)';

                    setTimeout(() => {
                        setTransition(elem, 100, 'ease-out');
                        elem.style.transform = 'scale(1)';

                        setTimeout(() => {
                            clearTransition(elem);
                            resetStyles(elem);
                            if (callback) callback(elem);
                            resolve(elem);
                        }, 100);
                    }, 100);
                }, 150);
            }, 200);
        });
    };

    // ── Exit Animations ──

    animate.fadeOut = (elem, duration = 300, callback) => {
        return animateOut(elem, { opacity: 0 }, duration, 'ease', callback);
    };

    animate.zoomOut = (elem, duration = 300, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'scale(0.1)' }, duration, 'ease', callback);
    };

    animate.slideOut = (elem, duration = 300, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'translateX(100%)' }, duration, 'ease', callback);
    };

    animate.rotateOut = (elem, duration = 400, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'rotate(360deg) scale(0)' }, duration, 'ease', callback);
    };

    animate.shrinkAndFadeOut = (elem, duration = 300, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'scale(0.1)' }, duration, 'ease', callback);
    };

    animate.flipOut = (elem, duration = 400, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'rotateY(90deg)' }, duration, 'ease', callback);
    };

    animate.bounceOut = (elem, duration = 600, callback) => {
        return new Promise((resolve) => {
            setTransition(elem, 300, 'cubic-bezier(0.68, -0.55, 0.27, 1.55)');
            elem.style.transform = 'scale(1.2)';

            setTimeout(() => {
                setTransition(elem, 300, 'ease-in');
                elem.style.transform = 'scale(0)';
                elem.style.opacity = '0';

                setTimeout(() => {
                    hide(elem);
                    clearTransition(elem);
                    resetStyles(elem);
                    if (callback) callback(elem);
                    resolve(elem);
                }, 300);
            }, 300);
        });
    };

    animate.slideAndRotateOut = (elem, duration = 400, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'translateX(100%) rotate(360deg)' }, duration, 'ease', callback);
    };

    animate.dropOut = (elem, duration = 400, callback) => {
        return animateOut(elem, { opacity: 0, transform: 'translateY(100%) scale(0.8)' }, duration, 'ease-in', callback);
    };

    animate.lightSpeedOut = (elem, duration = 400, callback) => {
        return new Promise((resolve) => {
            setTransition(elem, duration, 'ease-in');
            elem.style.transform = 'translateX(100%) skewX(-30deg)';
            elem.style.opacity = '0';

            setTimeout(() => {
                hide(elem);
                clearTransition(elem);
                resetStyles(elem);
                if (callback) callback(elem);
                resolve(elem);
            }, duration);
        });
    };

    animate.blurOut = (elem, duration = 400, callback) => {
        return animateOut(elem, { opacity: 0, filter: 'blur(8px)' }, duration, 'ease', callback);
    };

    animate.rotateAndScale = (elem, scale = '0.5', duration = 500, callback) => {
        return new Promise((resolve) => {
            setTransition(elem, duration, 'ease');
            elem.style.transform = `rotate(360deg) scale(${scale})`;
            elem.style.opacity = '0';

            setTimeout(() => {
                hide(elem);
                clearTransition(elem);
                resetStyles(elem);
                if (callback) callback(elem);
                resolve(elem);
            }, duration);
        });
    };

    // ── Attention Animations ──

    animate.pulse = (elem, duration = 600, callback) => {
        return new Promise((resolve) => {
            setTransition(elem, duration, 'ease-in-out');
            elem.style.transform = 'scale(1.15)';

            setTimeout(() => {
                elem.style.transform = 'scale(1)';

                setTimeout(() => {
                    clearTransition(elem);
                    resetStyles(elem);
                    if (callback) callback(elem);
                    resolve(elem);
                }, duration);
            }, duration / 2);
        });
    };

    animate.shake = (elem, duration = 500, callback) => {
        return new Promise((resolve) => {
            const interval = 60;
            const steps = Math.floor(duration / interval);
            let i = 0;

            elem.style.transition = `transform ${interval}ms ease`;

            const shake = () => {
                if (i >= steps) {
                    elem.style.transform = 'translateX(0)';
                    clearTransition(elem);
                    resetStyles(elem);
                    if (callback) callback(elem);
                    resolve(elem);
                    return;
                }
                elem.style.transform = i % 2 === 0 ? 'translateX(-8px)' : 'translateX(8px)';
                i++;
                setTimeout(shake, interval);
            };

            shake();
        });
    };

    animate.swing = (elem, duration = 500, callback) => {
        return new Promise((resolve) => {
            elem.style.transformOrigin = 'top center';
            setTransition(elem, duration / 4, 'ease');

            const swings = [
                'rotate(15deg)',
                'rotate(-10deg)',
                'rotate(5deg)',
                'rotate(0deg)'
            ];

            swings.forEach((angle, i) => {
                setTimeout(() => {
                    elem.style.transform = angle;
                    if (i === swings.length - 1) {
                        setTimeout(() => {
                            clearTransition(elem);
                            elem.style.transformOrigin = '';
                            resetStyles(elem);
                            if (callback) callback(elem);
                            resolve(elem);
                        }, duration / 4);
                    }
                }, (i * duration) / 4);
            });
        });
    };

    animate.wobble = (elem, duration = 600, callback) => {
        return new Promise((resolve) => {
            setTransition(elem, duration / 5, 'ease');

            const steps = [
                { transform: 'translateX(-25%) rotate(-5deg)' },
                { transform: 'translateX(20%) rotate(3deg)' },
                { transform: 'translateX(-15%) rotate(-3deg)' },
                { transform: 'translateX(10%) rotate(2deg)' },
                { transform: 'translateX(0) rotate(0)' }
            ];

            steps.forEach((step, i) => {
                setTimeout(() => {
                    Object.assign(elem.style, step);
                    if (i === steps.length - 1) {
                        setTimeout(() => {
                            clearTransition(elem);
                            resetStyles(elem);
                            if (callback) callback(elem);
                            resolve(elem);
                        }, duration / 5);
                    }
                }, (i * duration) / 5);
            });
        });
    };

    // ── Utility ──

    animate.reset = (elem) => {
        resetStyles(elem);
        clearTransition(elem);
        elem.style.display = '';
    };

    window.animate = animate;
})();
