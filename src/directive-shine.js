const shine = (el, binding) => {
    const { event, time, ease, blur, opacity, size } = binding.value || {};
    const EVENT = event || 'mouseenter';
    const TIME = time || 2; //seconds
    const EASE = ease || 'linear';
    const BLUR_AMOUNT = blur || 5; //px
    const OPACITY = opacity || 0.3;
    const SHINE_HEIGHT = size || 30; //px
    const SHINE_DELAY = TIME * 60; //ms

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
        element.style.left = '-100%';
        element.style.top = '-100%';
        element.style.transform = 'rotate(-45deg) translate(-50%, -50%)';
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

        setTimeout(() => {
            shine.style.left = (height + SHINE_HEIGHT) / 2 + 'px';
            shine.style.top = (width + SHINE_HEIGHT) / 2 + 'px';
        }, 40);

        setTimeout(() => {
            shineBack.style.left = (height + SHINE_HEIGHT) / 2 + 'px';
            shineBack.style.top = (width + SHINE_HEIGHT) / 2 + 'px';
        }, 40 + SHINE_DELAY);

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