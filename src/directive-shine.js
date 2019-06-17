const shine = (el, binding) => {
    const { event, time, ease, angle, blur, color, delay, opacity, shineWidth, fromLeft, extraShine } = binding.value || {};

    // Constants
    const   EVENT = event || 'mouseenter',
            TIME = time || 1.5, //seconds
            DELAY = delay || 0,
            EASE = ease || 'ease-in-out',
            BLUR_AMOUNT = blur || 8, //px
            OPACITY = opacity || 0.4,
            COLOR = color || '#fff',
            SHINE_DELAY = TIME * 80, //ms
            FROM_LEFT = fromLeft === undefined ? true : fromLeft,
            SHOW_NEGATIVE = !FROM_LEFT ? '-' : '';

    // Toggles
    let SHINE_WIDTH,
        isAnimating = false,
        mouseEntered = false;

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

    const createShineElement = (size, width, _angle) => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = '50%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_WIDTH / 2 }px)`;
        element.style.top = '-100%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_WIDTH / 2 }px)`;
        element.style.transform = `rotate(${ - _angle }deg) translate(-50%, -50%)`;
        element.style.transformOrigin = 'top left';
        element.style.backgroundColor = COLOR;
        element.style.height = width + 'px'; // Not actually width, it's only because we are rotating it that it looks like it.
        element.style.width = size + 'px';
        element.style.opacity = OPACITY;
        element.style.transition = `all ${ TIME }s ${ EASE }`;
        return element;
    }

    const createExtraShine = (container, size, top, width, _angle) => {
        if (extraShine) {
            const extraShineElement = createShineElement(size, width / 4, _angle);
            container.appendChild(extraShineElement);
            setTimeout(() => { 
                extraShineElement.style.top = top 
            }, SHINE_DELAY);
        }
    }

    const shineAnimation = (element, size, height, width, _angle) => {
        const container = createContainer();
        const shineElement = createShineElement(size, width, _angle);

        container.appendChild(shineElement);
        element.appendChild(container);

        const top = `calc(100% + ${ height + width }px)`;
        const shineDelay = DELAY * 1000;

        // Show the shine.
        setTimeout(() => {
            shineElement.style.top = top;
            // The extra shine behind the main shine.
            createExtraShine(container, size, top, width, _angle);
        }, 40 + shineDelay);

        // Remove the container & shine elements from the DOM.
        setTimeout(() => {
            el.removeChild(container);
            isAnimating = false;
        }, (TIME * 1000 + SHINE_DELAY) + shineDelay);
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
        const size = Math.hypot(height, width) * 1.5; // Length of the shine bar.
        const _angle = angle || SHOW_NEGATIVE + ((Math.atan(height / width) * 180) / Math.PI).toString();

        // Determine the height of the shine.
        SHINE_WIDTH = shineWidth || (height > width ? height : width) / 4;

        shineAnimation(
            target,
            size,
            height,
            SHINE_WIDTH,
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