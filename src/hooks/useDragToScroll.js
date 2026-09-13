import { useEffect, useRef } from "react";

const useDragToScroll = ({touch = true}={})=>{
    // const {
    //     touch = true,
    // } = props;

    const ref = useRef(null);

    useEffect(()=>{
        const element = ref.current;
        if(!element) return;

        let isDragging = false,
            startX = 0,
            startY = 0,
            scrollLeft = 0,
            scrollTop = 0;
        
        const startDrag = (pageX, pageY)=>{
            isDragging = true;
            startX = pageX - element.offsetLeft;
            startY = pageY - element.offsetTop;
            scrollLeft = element.scrollLeft;
            scrollTop = element.scrollTop;
        }

        const moveToDrag = (pageX, pageY)=>{
            if(!isDragging) return;

            const x = pageX - element.offsetLeft;
            const y = pageY - element.offsetTop;

            element.scrollLeft = scrollLeft - (x - startX);
            element.scrollTop = scrollTop - (y-startY);
        }

        const endDrag = ()=>{
            isDragging = false;
        }

        const onMouseDown = (event)=>{
            startDrag(event.pageX, event.pageY);
            element.style.cursor = 'grabbing';
        }

        const onMouseMove = (event)=>{
            event.preventDefault();
            moveToDrag(event.pageX, event.pageY);
        }

        const onMouseUp = ()=>{
            endDrag();
            element.style.cursor = 'grab';
        }

        const onTouchStart = (event)=>{
            const touch = event.touches[0];

            startDrag(touch.pageX, touch.pageY);
        }

        const onTouchMove = (event)=>{
            const touch = event.touches[0];
            moveToDrag(touch.pageX, touch.pageY);
        }
        const onTouchEnd = endDrag;

        element.style.cursor = 'grab';
        element.addEventListener('mousedown', onMouseDown);
        element.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseup', onMouseUp);
        element.addEventListener('mouseleave', onMouseUp);


        if(touch){
            element.addEventListener('touchstart', onTouchStart, { passive: true });
            element.addEventListener('touchmove', onTouchMove, { passive: true });
            element.addEventListener('touchend', onTouchEnd);
        }

        return ()=>{
            element.removeEventListener('mousedown', onMouseDown);
            element.removeEventListener('mousemove', onMouseMove);
            element.removeEventListener('mouseup', onMouseUp);
            element.removeEventListener('mouseleave', onMouseUp);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchmove', onTouchMove);
            element.removeEventListener('touchend', onTouchEnd);
        }

    }, [touch]);

    return ref;
}

export default useDragToScroll;