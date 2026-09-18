
const TimelineImage = ({image}) => {

  return (
    <div className="timeline__image">
      {image ? <img src={image} alt={`image`}></img> : null}
    </div>
  );
};

const TimelineText = (props) => {
  const { children, text } = props;

  return (
    <div className="timeline__text">
      <h2 className="title">{children}</h2>
      <p>{text}</p>
    </div>
  );
};

const TimelineInfo = (props) => {
  const { activeEvent, onSelectedEvent } = props;

  if (!activeEvent) {
    return (
      <div className="timeline__info">
        <p>Выберите событие на таймлайне</p>
      </div>
    );
  }

  return (
    <div className="timeline__info">
      <TimelineImage image={activeEvent.tagImgUrl}></TimelineImage>
      <TimelineText text={`${activeEvent.tagTitle}`}>
        {activeEvent.tagText}
      </TimelineText>
    </div>
  );
};

export default TimelineInfo;
