// ── Entrance ──
export function fadeIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function zoomIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function slideIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function rotateIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function flipIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function bounceIn(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;

// ── Exit ──
export function fadeOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function zoomOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function slideOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function rotateOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function shrinkAndFadeOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function flipOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function bounceOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function slideAndRotateOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function dropOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function lightSpeedOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function blurOut(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function rotateAndScale(elem: HTMLElement, scale?: string, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;

// ── Attention ──
export function pulse(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function shake(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function swing(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;
export function wobble(elem: HTMLElement, duration?: number, callback?: (elem: HTMLElement) => void): Promise<HTMLElement>;

// ── Utility ──
export function reset(elem: HTMLElement): void;

// ── Internal / Advanced ──
export const EASE: Readonly<{
    IN: string;
    OUT: string;
    IN_OUT: string;
    BOUNCE: string;
}>;

declare const animate: {
    fadeIn: typeof fadeIn;
    zoomIn: typeof zoomIn;
    slideIn: typeof slideIn;
    rotateIn: typeof rotateIn;
    flipIn: typeof flipIn;
    bounceIn: typeof bounceIn;
    fadeOut: typeof fadeOut;
    zoomOut: typeof zoomOut;
    slideOut: typeof slideOut;
    rotateOut: typeof rotateOut;
    shrinkAndFadeOut: typeof shrinkAndFadeOut;
    flipOut: typeof flipOut;
    bounceOut: typeof bounceOut;
    slideAndRotateOut: typeof slideAndRotateOut;
    dropOut: typeof dropOut;
    lightSpeedOut: typeof lightSpeedOut;
    blurOut: typeof blurOut;
    rotateAndScale: typeof rotateAndScale;
    pulse: typeof pulse;
    shake: typeof shake;
    swing: typeof swing;
    wobble: typeof wobble;
    reset: typeof reset;
};

export default animate;

interface Window {
    animate: typeof animate;
}
