import { color } from "framer-motion";

const EventPill = (props)=>{
    const{
        children,
        id,
        leftOffset,
        topOffset
    } = props;

    const widthLevel = 128,
        heightPill = 32;


    const EventPillClick = ()=>{
       console.log(id);
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
                    width: widthLevel + 'px',
                    height: heightPill + 'px',
                }
            }
        >
            <p>{children}</p>
        </span>
    );
}

export default EventPill;