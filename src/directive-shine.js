const shine = (el, binding) => {
    const { event, time, ease, blur, opacity, size, fromLeft } = binding.value || {};

    // Constants
    const EVENT = event || 'mouseenter';
    const TIME = time || 1; //seconds
    const EASE = ease || 'ease';
    const BLUR_AMOUNT = blur || 3; //px
    const OPACITY = opacity || 0.3;
    const SHINE_HEIGHT = size || 30; //px
    const SHINE_DELAY = TIME * 80; //ms
    const FROM_LEFT = fromLeft === undefined ? true : fromLeft;

    const SHOW_NEGATIVE = FROM_LEFT ? '-' : '';

    // Toggles
    let isAnimating = false;
    let mouseEntered = false;

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

    const createShineElement = (size, height) => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = `calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_HEIGHT / 2 }px)`;
        element.style.top = `calc(${ SHOW_NEGATIVE }50% + ${ -SHINE_HEIGHT / 2 }px)`;
        element.style.transform = `rotate(${ SHOW_NEGATIVE }45deg) translate(-50%, -50%)`;
        element.style.backgroundColor = '#fff';
        element.style.height = height + 'px';
        element.style.width = size + 'px';
        element.style.opacity = OPACITY;
        element.style.transition = `all ${ TIME }s ${ EASE }`;
        return element;
    }

    const shineAnimation = (element, size, height, width) => {
        const container = createContainer();
        const shine = createShineElement(size, SHINE_HEIGHT);
        const shineBack = createShineElement(size, SHINE_HEIGHT / 3);

        container.appendChild(shine);
        container.appendChild(shineBack);
        
        element.appendChild(container);

        const h = height + SHINE_HEIGHT;
        const w = width + SHINE_HEIGHT;

        const left = (FROM_LEFT ? h / 2 : -h / 2) + 'px';
        const top = (FROM_LEFT ? w / 2 : w * 2) + 'px';

        setTimeout(() => {
            shine.style.left = left;
            shine.style.top = top;

            setTimeout(() => {
                shineBack.style.left = left;
                shineBack.style.top = top;
            }, SHINE_DELAY);
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
        const size = (height ^ 2) + (width ^ 2);

        shineAnimation(
            target,
            size,
            height,
            width
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