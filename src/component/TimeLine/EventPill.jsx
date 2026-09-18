import { color } from "framer-motion";

const EventPill = (props)=>{
    const{
        children,
        idName,
        leftOffset,
        topOffset,
        widthPx,
        heightPx,
        onSelected
    } = props;


    const EventPillClick = (id = idName)=>{
       onSelected?.(id)
    }


    return(

        <span 
            className="eventPill"
            onClick={EventPillClick}
            style={
                {
                    position: 'absolute',
                    left: leftOffset,
                    top: topOffset,
                    heightPx: heightPx,
                    width: widthPx
                }
            }
        >
            <p 
                style={
                    {
                        fontSize: `calc(${heightPx} * 0.42)`
                    }
                }
            >{children}</p>
        </span>
    );
}

export default EventPill;