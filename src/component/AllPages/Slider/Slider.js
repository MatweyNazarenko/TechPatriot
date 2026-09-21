import { useRef } from "react";
import * as styles from '';

export const ManySlidesSlider= (props)=>{
    const {
        length,
        item
    }=props;

    const scrollRef = useDragToScroll();

    return(
        <div ref={scrollRef} className="">
            
        </div>
    )
}
