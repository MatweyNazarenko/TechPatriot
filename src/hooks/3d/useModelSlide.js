import { useEffect, useState } from 'react';

const useModalSlide = (totalItems) => {
	const [currentItem, setCurrentItem] = useState();

	const totalRef = useRef(totalItems);
	totalRef.current = totalItems;

	const nextClick = () => {
		if (totalRef.current <= 0) return;
		setCurrentItem((prev) => (prev + 1) % totalRef.current);
	};

	const prevClick = () => {
		if (totalRef.current <= 0) return;
		setCurrentItem(
			(prev) => (prev - 1 + totalItems) % totalRef.current
		);
	};

	const goToItem = () => {
		if (totalRef.current <= 0) return;
		if (index >= 0 && index < totalRef.current) {
			setCurrentIndex(index);
		}
	};

    useEffect(()=>{
        const handleKeyDown = (event)=>{
            if(['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return

            if(event.key === 'ArrowRight') nextClick();
            if(event.key === 'ArrowLeft') prevClick();

            window.addEventListener('keydown', handleKeyDown);

            return ()=> window.removeEventListener('keydown', handleKeyDown);
        }
    }, [nextClick, prevClick])

    return {
        nextClick,
        prevClick,
        goToItem,
        currentItem
    }
};

export default useModalSlide;
