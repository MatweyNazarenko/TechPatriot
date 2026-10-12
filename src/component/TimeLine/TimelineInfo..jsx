import { AnimatePresence, motion } from "framer-motion";
import { formatEventDate } from "../../library/timeControl";

const TimelineImage = ({ image, title }) => {
    return (
        <div className="timeline__image">
            {image ? <img src={image} alt={title || "Событие хронологии"} /> : null}
        </div>
    );
};

const TimelineText = ({ title, text, dateLabel }) => {
    return (
        <div className="timeline__text">
            {dateLabel ? <span className="timeline__date">{dateLabel}</span> : null}
            <h2 className="title">{title}</h2>
            <p>{text}</p>
        </div>
    );
};

const TimelineInfo = ({ activeEvent }) => {
    if (!activeEvent) {
        return (
            <div className="timeline__info timeline__info--empty">
                <p>Выберите событие на шкале времени</p>
            </div>
        );
    }

    const dateLabel = formatEventDate(
        activeEvent.tagTimeStart,
        activeEvent.tagTimeEnd,
        { withYear: true }
    );

    return (
        <div className="timeline__info">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeEvent.id}
                    className="timeline__infoInner"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                >
                    <TimelineImage
                        image={activeEvent.tagImgUrl}
                        title={activeEvent.tagTitle}
                    />
                    <TimelineText
                        title={activeEvent.tagTitle}
                        text={activeEvent.tagText}
                        dateLabel={dateLabel}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TimelineInfo;
