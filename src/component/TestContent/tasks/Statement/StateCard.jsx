const StateCard = (props) => {
    const{
        statement,
        num
    }=props;
    return (
        <div className="statement__card">
            <span>Утверждение {num+1}</span>
            <p>{statement}</p>
        </div>
    )

}

export default StateCard;