import { color } from "framer-motion";

const EventPill = (props)=>{
    const{
        children,
        id,
    } = props;

    const widthLevel = 128,
        heightPill = 32;
    const levelPadding = '8'


    const EventPillClick = ()=>{
       console.log(id);
    }


    return(

        <span 
            className="eventPill"
            onClick={EventPillClick}
            style={
                {
                    width: widthLevel + 'px',
                    height: heightPill + 'px'
                }
            }
        >
            <p>{children}</p>
        </span>
    );
}

export default EventPill;