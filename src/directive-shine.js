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

    /**
     * @description
     * The container the shine elements will sit inside of.
     * This will be the same dimensions as the main element with the shine effect.
     */
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

    /**
     * @description
     * Creates a custom shine element.
     */
    const createShineElement = (size, width, shineAngle) => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = '50%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_WIDTH / 2 }px)`;
        element.style.top = '-100%' //`calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_WIDTH / 2 }px)`;
        element.style.transform = `rotate(${ - shineAngle }deg) translate(-50%, -50%)`;
        element.style.transformOrigin = 'top left';
        element.style.backgroundColor = COLOR;
        element.style.height = width + 'px'; // Not actually width, it's only because we are rotating it that it looks like it.
        element.style.width = size + 'px';
        element.style.opacity = OPACITY;
        element.style.transition = `all ${ TIME }s ${ EASE }`;
        return element;
    }

    /**
     * @description
     * Creates another shine element that trails behind
     * the main shine element to give more of a glossy effect.
     */
    const createExtraShine = (props) => {
        if (extraShine) {
            const { container, size, top, width, shineAngle } = props;
            // Extra shine element will always be a quarter of the size of the normal shine element.
            const extraShineElement = createShineElement(size, width / 4, shineAngle);
            container.appendChild(extraShineElement);
            setTimeout(() => { 
                extraShineElement.style.top = top 
            }, SHINE_DELAY);
        }
    }

    /**
     * @description
     * Begins the shine animation by creating the elements
     * and setting the timeout functions.
     * This will remove the elements from the DOM once completed.
     */
    const shineAnimation = (props) => {
        // Deconstruct.
        const { element, size, height, width, shineAngle } = props;

        // Create elements.
        const container = createContainer();
        const shineElement = createShineElement(size, width, shineAngle);

        container.appendChild(shineElement);
        element.appendChild(container);

        // Calculate end position.
        const top = `calc(100% + ${ height + width }px)`;
        const shineDelay = DELAY * 1000;

        // Show the shine.
        setTimeout(() => {
            shineElement.style.top = top;
            // The extra shine behind the main shine.
            createExtraShine({ ...props, top, container });
        }, 40 + shineDelay);

        // Remove the container & shine elements from the DOM.
        setTimeout(() => {
            el.removeChild(container);
            isAnimating = false;
        }, (TIME * 1000 + SHINE_DELAY) + shineDelay);
    }

    /**
     * @description
     * Event handler for when the shine animation should start. 
     */
    const onEventHandler = (e) => {
        // Do not fire this handler if shine is already animating or user is still hovering over element.
        if (isAnimating || mouseEntered) {
            return;
        }
        isAnimating = mouseEntered = true;

        // Get main element and shine element details.
        const target = e.target;
        const width = target.clientWidth;
        const height = target.clientHeight;
        const size = Math.hypot(height, width) * 1.5; // Length of the shine bar.
        // If no angle is provided, get the Hypotenuse of the element.
        const shineAngle = angle || SHOW_NEGATIVE + ((Math.atan(height / width) * 180) / Math.PI).toString();

        // Determine the height of the shine.
        SHINE_WIDTH = shineWidth || (height > width ? height : width) / 4;

        shineAnimation({
            element: target,
            size,
            height,
            width: SHINE_WIDTH,
            shineAngle
        })
    }

    el.style.position = 'relative';
    el.addEventListener(EVENT, onEventHandler);
    el.addEventListener('mouseleave', (e) => {
        // Reset
        mouseEntered = false;
    })
}

export default shine;