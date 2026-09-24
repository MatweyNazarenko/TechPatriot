import { useEffect, useState, useCallback } from 'react';

const useModalSlide = (totalItems = 0) => {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        if (totalItems > 0 && currentItem >= totalItems) {
            setCurrentItem(0);
        }
    }, [totalItems, currentItem]);

    const nextClick = useCallback(() => {
        if (totalItems <= 0) return;
        setCurrentItem((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    const prevClick = useCallback(() => {
        if (totalItems <= 0) return;
        setCurrentItem((prev) => (prev - 1 + totalItems) % totalItems);
    }, [totalItems]);

    const goToItem = useCallback(
        (index) => {
            if (totalItems <= 0) return;
            if (index >= 0 && index < totalItems) {
                setCurrentItem(index);
            }
        },
        [totalItems]
    );

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
                return;
            }

            if (event.key === 'ArrowRight') nextClick();
            if (event.key === 'ArrowLeft') prevClick();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextClick, prevClick]);

    return {
        nextClick,
        prevClick,
        goToItem,
        currentItem,
    };
};

export default useModalSlide;