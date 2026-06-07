# Animate.js

A lightweight JavaScript animation library for DOM elements. Zero dependencies.

## Installation

```html
<script src="src/animate.js"></script>
```

## Usage

```javascript
const el = document.querySelector('.my-element');

// Entrance
animate.fadeIn(el);

// Exit
animate.fadeOut(el);

// Attention
animate.pulse(el);
```

All methods return a Promise and accept an optional callback:

```javascript
animate.fadeOut(el, 300, (el) => console.log('done'));
// or
await animate.fadeIn(el);
console.log('animation complete');
```

## Animations

### Entrance
| Method | Default Duration |
|--------|-----------------|
| `fadeIn(elem, duration?, callback?)` | 300ms |
| `zoomIn(elem, duration?, callback?)` | 300ms |
| `slideIn(elem, duration?, callback?)` | 300ms |
| `rotateIn(elem, duration?, callback?)` | 400ms |
| `flipIn(elem, duration?, callback?)` | 400ms |
| `bounceIn(elem, duration?, callback?)` | 600ms |

### Exit
| Method | Default Duration |
|--------|-----------------|
| `fadeOut(elem, duration?, callback?)` | 300ms |
| `zoomOut(elem, duration?, callback?)` | 300ms |
| `slideOut(elem, duration?, callback?)` | 300ms |
| `rotateOut(elem, duration?, callback?)` | 400ms |
| `shrinkAndFadeOut(elem, duration?, callback?)` | 300ms |
| `flipOut(elem, duration?, callback?)` | 400ms |
| `bounceOut(elem, duration?, callback?)` | 600ms |
| `slideAndRotateOut(elem, duration?, callback?)` | 400ms |
| `dropOut(elem, duration?, callback?)` | 400ms |
| `lightSpeedOut(elem, duration?, callback?)` | 400ms |
| `blurOut(elem, duration?, callback?)` | 400ms |
| `rotateAndScale(elem, scale?, duration?, callback?)` | 500ms |

### Attention
| Method | Default Duration |
|--------|-----------------|
| `pulse(elem, duration?, callback?)` | 600ms |
| `shake(elem, duration?, callback?)` | 500ms |
| `swing(elem, duration?, callback?)` | 500ms |
| `wobble(elem, duration?, callback?)` | 600ms |

### Utility
| Method | Description |
|--------|-------------|
| `reset(elem)` | Resets inline styles and display |

## License

MIT
