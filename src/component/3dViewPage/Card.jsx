const Card = (props)=>{
    const {
        title,
        content,
        Icon
    }= props;
    
    return(
        <div className="card">
            <p>{title}</p>
            <h3>{content}</h3>
            <div className="icon">
                <Icon></Icon>
            </div>
        </div>
    )
}

export default Card;