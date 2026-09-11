const TimelineSlide = (props) => {
    let timeTags = {
        tag1: {
            tagTimeName: '12 июня - 16 июня',
            tagImgUrl: '../../img/t-34.jpg',
            tagTime: new Date("1941-07-12"),
            tagTitle: "HHHHHH",
            tagText: "Hhhhhhhhhhhhhhhhhhhhhhhh",
        },
        tag2: {
            tagTimeName: '12 июня - 16 июня',
            tagImgUrl: '../../img/t-34.jpg',
            tagTime: new Date("1942-07-12"),
            tagTitle: "HHHHHH",
            tagText: "Hhhhhhhhhhhhhhhhhhhhhhhh",
        },
        tag3: {
            tagTimeName: '12 июня - 16 июня',
            tagImgUrl: '../../img/t-34.jpg',
            tagTime: new Date("1952-07-12"),
            tagTitle: "HHHHHH",
            tagText: "Hhhhhhhhhhhhhhhhhhhhhhhh",
        },
        tag4: {
            tagTimeName: '12 июня - 16 июня',
            tagImgUrl: '../../img/t-34.jpg',
            tagTime: new Date("1935-07-12"),
            tagTitle: "HHHHHH",
            tagText: "Hhhhhhhhhhhhhhhhhhhhhhhh",
        }
    }
    const years = [];
    for (const key of Object.keys(timeTags)) {
        years.push(timeTags[key].tagTime.getFullYear());
    }
    years.sort((a, b) => a - b);

    const fullYears = [];
    for (let i = years[0]; i <= years[years.length - 1]; i++) {
        fullYears.push(i);
    }

    console.log(fullYears);

    return (
        <div className="timeline__slideBar">
            <div className="top">
                Timeline
            </div>
            <div className="bottom">
                <ul>
                    {fullYears.map((item) => {
                        return (
                            <li
                                key={item}
                            >
                                {item}
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )


}


export default TimelineSlide;