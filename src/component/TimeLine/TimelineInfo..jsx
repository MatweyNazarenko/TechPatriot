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
            <TimelineImage></TimelineImage>
            <TimelineText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electroni">Hello, World!</TimelineText>
        </div>       
    )
}

export default TimelineInfo;