const Card = (props)=>{
    const {
        title
    }= props;
    
    return(
        <div className="card">
            <h3>{title}</h3>
        </div>
    )
}

export default Card;