import { useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const threeshold = 100;
const velocity = 500;


const useSwipe = (onSwipe) => {
    const x = useMotionValue(0);
    const busy = useRef(null);

    const rotate = useTransform(x, [-300, 0, 300], [-12, 0, 12]);
    const trueOpacity = useTransform(x, [40, 140], [0, 1]);
    const falseOpacity = useTransform(x, [-40, -140], [0, 1]);
    const leftGlow = useTransform(x, [-140, -40], [1, 0]);
    const rightGlow = useTransform(x, [40, 140], [0, 1]);


    const flyOut = (direction) => {
        if (busy.current) return;

        busy.current = true;
        onSwipe?.(direction);

        const target = direction === 'right' ? window.innerWidth : -window.innerWidth;

        animate(x, target, {
            duration: 0.3,
            onComplete: () => {
                busy.current = false;
            }
        })
    }

    function handleDragEnd(event, info) {
        if (info.offset.x > threeshold || info.velocity.x > velocity) flyOut('right');
        else if (info.offset.x < -threeshold || info.velocity.x < -velocity) flyOut('left');
        else animate(x, 0, { type: 'spring', stiffness: 300, damping: 25 });
    }

    function swipe(direction) {
        flyOut(direction);
    }

    function reset() {
        busy.current = false;
        x.set(0);
    }

    const dragProps = {
        drag: 'x',
        dragMomentum: false,
        onDragEnd: handleDragEnd,
        style: { x, rotate },
    };

    return {
        x,
        rotate,
        trueOpacity,
        falseOpacity,
        leftGlow,
        rightGlow,
        dragProps,
        swipe,
        reset,
    };

}

export default useSwipe;