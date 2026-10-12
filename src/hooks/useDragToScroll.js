import { useEffect, useRef } from "react";

const DRAG_THRESHOLD = 6;

const useDragToScroll = ({ touch = true } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let isDragging = false;
        let didDrag = false;
        let startX = 0;
        let startY = 0;
        let scrollLeft = 0;
        let scrollTop = 0;

        const startDrag = (pageX, pageY) => {
            isDragging = true;
            didDrag = false;
            startX = pageX - element.offsetLeft;
            startY = pageY - element.offsetTop;
            scrollLeft = element.scrollLeft;
            scrollTop = element.scrollTop;
            element.dataset.dragging = "0";
        };

        const moveToDrag = (pageX, pageY) => {
            if (!isDragging) return;

            const x = pageX - element.offsetLeft;
            const y = pageY - element.offsetTop;
            const dx = x - startX;
            const dy = y - startY;

            if (!didDrag && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
                didDrag = true;
                element.dataset.dragging = "1";
            }

            if (!didDrag) return;

            element.scrollLeft = scrollLeft - dx;
            element.scrollTop = scrollTop - dy;
        };

        const endDrag = () => {
            isDragging = false;
            if (didDrag) {
                element.dataset.dragging = "1";
                requestAnimationFrame(() => {
                    element.dataset.dragging = "0";
                });
            } else {
                element.dataset.dragging = "0";
            }
        };

        const onMouseDown = (event) => {
            if (event.button !== 0) return;
            startDrag(event.pageX, event.pageY);
            element.style.cursor = "grabbing";
        };

        const onMouseMove = (event) => {
            if (!isDragging) return;
            if (didDrag) event.preventDefault();
            moveToDrag(event.pageX, event.pageY);
        };

        const onMouseUp = () => {
            endDrag();
            element.style.cursor = "grab";
        };

        const onTouchStart = (event) => {
            const point = event.touches[0];
            startDrag(point.pageX, point.pageY);
        };

        const onTouchMove = (event) => {
            const point = event.touches[0];
            moveToDrag(point.pageX, point.pageY);
        };

        element.style.cursor = "grab";
        element.dataset.dragging = "0";
        element.addEventListener("mousedown", onMouseDown);
        element.addEventListener("mousemove", onMouseMove);
        element.addEventListener("mouseup", onMouseUp);
        element.addEventListener("mouseleave", onMouseUp);

        if (touch) {
            element.addEventListener("touchstart", onTouchStart, { passive: true });
            element.addEventListener("touchmove", onTouchMove, { passive: true });
            element.addEventListener("touchend", endDrag);
        }

        return () => {
            element.removeEventListener("mousedown", onMouseDown);
            element.removeEventListener("mousemove", onMouseMove);
            element.removeEventListener("mouseup", onMouseUp);
            element.removeEventListener("mouseleave", onMouseUp);
            element.removeEventListener("touchstart", onTouchStart);
            element.removeEventListener("touchmove", onTouchMove);
            element.removeEventListener("touchend", endDrag);
        };
    }, [touch]);

    return ref;
};

export default useDragToScroll;
