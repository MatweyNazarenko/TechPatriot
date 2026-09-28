import Card from "./Card";


const CardSlider = (props) => {

    const {
        modelInfo
    } = props;

    const cardsInfo = modelInfo.info;

    return (
        <div className="scene3d__cardSlider">
            {cardsInfo.map((item) => {

                return (<Card
                key={crypto.randomUUID()}
                    title={item.title}
                    content={item.content}
                    Icon={item.icon}
                ></Card>)
            })}
        </div>
    )
}

export default CardSlider;