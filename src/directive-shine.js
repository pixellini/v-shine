const shine = (el, binding) => {
    const { event, time, ease, angle, blur, color, opacity, size, fromLeft, extraShine } = binding.value || {};

    // Constants
    const EVENT = event || 'mouseenter';
    const TIME = time || 1.5; //seconds
    const EASE = ease || 'ease-in-out';
    const BLUR_AMOUNT = blur || 8; //px
    const OPACITY = opacity || 0.4;
    const COLOR = color || '#fff';
    const SHINE_HEIGHT = size || 40; //px
    const SHINE_DELAY = TIME * 80; //ms
    const FROM_LEFT = fromLeft === undefined ? true : fromLeft;

    const SHOW_NEGATIVE = !FROM_LEFT ? '-' : '';

    // Toggles
    let isAnimating = false;
    let mouseEntered = false;
    let elementHeight = SHINE_HEIGHT;

    const createContainer = () => {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = 0;
        container.style.left = 0;
        container.style.height = '100%';
        container.style.width = '100%';
        container.style.overflow = 'hidden';
        container.style.filter = `blur(${ BLUR_AMOUNT }px)`;
        return container;
    }

    const createShineElement = (size, height, _angle) => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = '50%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_HEIGHT / 2 }px)`;
        element.style.top = '-100%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_HEIGHT / 2 }px)`;
        element.style.transform = `rotate(${ - _angle }deg) translate(-50%, -50%)`;
        element.style.transformOrigin = 'top left';
        element.style.backgroundColor = COLOR;
        element.style.height = height + 'px';
        element.style.width = size + 'px';
        element.style.opacity = OPACITY;
        element.style.transition = `all ${ TIME }s ${ EASE }`;
        return element;
    }

    const shineAnimation = (element, size, height, width, _angle) => {
        const container = createContainer();
        const shine = createShineElement(size, elementHeight, _angle);
        const shineBack = createShineElement(size, elementHeight / 4, _angle);

        container.appendChild(shine);
        container.appendChild(shineBack);
        
        element.appendChild(container);

        const h = height + SHINE_HEIGHT;
        const w = width + SHINE_HEIGHT;
        const top = `calc(100% + ${h}px)`;

        setTimeout(() => {
            // shine.style.left = left;
            shine.style.top = top;

            if (extraShine) {
                setTimeout(() => {
                    shineBack.style.top = top;
                }, SHINE_DELAY);
            }
        }, 40);

        setTimeout(() => {
            el.removeChild(container);
            isAnimating = false;
        }, TIME * 1000 + SHINE_DELAY);
    }

    const onEventHandler = (e) => {
        if (isAnimating || mouseEntered) {
            return;
        }
        isAnimating = true;
        mouseEntered = true;

        let target = e.target;
        // If the user clicked the currently animating ripple or container, select the parent element.
        while (target !== el) {
            target = target.parentElement;
        }

        const width = target.clientWidth;
        const height = target.clientHeight;
        elementHeight = (height > width ? height : width) / 4;
        const size = Math.hypot(height, width) * 1.5; // Size of the shine bar.
        const _angle = angle || SHOW_NEGATIVE + ((Math.atan(height / width) * 180) / Math.PI).toString();

        shineAnimation(
            target,
            size,
            height,
            width,
            _angle
        )
    }

    const onMouseLeaveHandler = (e) => {
        mouseEntered = false;
    }

    el.style.position = 'relative';
    el.addEventListener(EVENT, onEventHandler);
    el.addEventListener('mouseleave', onMouseLeaveHandler)
}

export default shine;