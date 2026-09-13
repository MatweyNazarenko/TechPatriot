const EventPill = (props)=>{
    const{
        children
    } = props;

    return(
        <span 
            className="eventPill"
        >
            <p>{children}</p>
        </span>
    );
}

export default EventPill;