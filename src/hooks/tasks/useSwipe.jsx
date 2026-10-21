import { animate, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useMemo, useRef } from "react";

const threshold = 100;
const velocity = 500;

const useSwipe = (onSwipe) => {
    const x = useMotionValue(0);
    const busy = useRef(false);

    const rotate = useTransform(x, [-300, 0, 300], [-12, 0, 12]);
    const trueOpacity = useTransform(x, [40, 140], [0, 1]);
    const falseOpacity = useTransform(x, [-40, -140], [0, 1]);
    const leftGlow = useTransform(x, [-140, -40], [1, 0]);
    const rightGlow = useTransform(x, [40, 140], [0, 1]);

    const flyOut = useCallback(
        (direction) => {
            if (busy.current) return;
            busy.current = true;
            onSwipe?.(direction);

            const target =
                direction === "right"
                    ? window.innerWidth * 1.2
                    : -window.innerWidth * 1.2;

            animate(x, target, { duration: 0.28, ease: "easeIn" });
        },
        [onSwipe, x]
    );

    const handleDragEnd = useCallback(
        (_event, info) => {
            if (busy.current) return;
            if (info.offset.x > threshold || info.velocity.x > velocity) {
                flyOut("right");
            } else if (info.offset.x < -threshold || info.velocity.x < -velocity) {
                flyOut("left");
            } else {
                animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
            }
        },
        [flyOut, x]
    );

    const swipe = useCallback(
        (direction) => {
            flyOut(direction);
        },
        [flyOut]
    );

    const reset = useCallback(() => {
        busy.current = false;
        x.stop();
        x.set(0);
    }, [x]);

    return useMemo(
        () => ({
            x,
            rotate,
            trueOpacity,
            falseOpacity,
            leftGlow,
            rightGlow,
            dragProps: {
                drag: "x",
                dragMomentum: false,
                onDragEnd: handleDragEnd,
                style: { x, rotate },
            },
            swipe,
            reset,
        }),
        [
            x,
            rotate,
            trueOpacity,
            falseOpacity,
            leftGlow,
            rightGlow,
            handleDragEnd,
            swipe,
            reset,
        ]
    );
};

export default useSwipe;
