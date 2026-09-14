import image from '../../img/t-34.jpg'

const TimelineImage = () => {

    let imageUrl = image;
    
    return(
        <div className='timeline__image'>
            {imageUrl ? <img src={imageUrl} alt={`image`}></img> : null}
        </div>
    )
}

const TimelineText = (props)=>{
    const {
        children,
        text
    } = props;


    return(
        <div className='timeline__text'>
            <h2 className="title">{children}</h2>
            <p>{text}</p>
        </div>
    )
}

const TimelineInfo = ()=>{
    return(
        <div className="timeline__info">
            {/* <TimelineImage></TimelineImage> */}
            <TimelineText text="Lorem Ipsum">Hello, World!</TimelineText>
        </div>       
    )
}

export default TimelineInfo;