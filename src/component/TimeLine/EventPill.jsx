const EventPill = (props) => {
    const {
        children,
        title,
        idName,
        leftOffset,
        topOffset,
        widthPx,
        heightPx,
        isActive,
        onSelected,
    } = props;

    const handleClick = (event) => {
        const scroller = event.currentTarget.closest("[data-dragging]");
        if (scroller?.dataset.dragging === "1") return;
        onSelected?.(idName);
    };

    return (
        <button
            type="button"
            className={`eventPill${isActive ? " eventPill--active" : ""}`}
            onClick={handleClick}
            title={title}
            aria-pressed={isActive}
            style={{
                position: "absolute",
                left: leftOffset,
                top: topOffset,
                height: heightPx,
                width: widthPx,
            }}
        >
            {title ? <span className="eventPill__title">{title}</span> : null}
            <span className="eventPill__date">{children}</span>
        </button>
    );
};

export default EventPill;
