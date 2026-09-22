import { useRef } from "react";
import useDragToScroll from '../../../hooks/useDragToScroll'
import styles from './Slider.module.css';

export const ManySlidesSlider= (props)=>{
    const {
        length,
        item
    }=props;
    const scrollRef = useDragToScroll();

    return(
        <div ref={scrollRef} className={styles.slider}>
            
        </div>
    )
}
