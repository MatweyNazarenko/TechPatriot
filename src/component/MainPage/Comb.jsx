import combBackground from '../../img/comb.png'
const Comb = (props)=>{
    const{
        children,
        titleBack,
        descBack,
        link
    }=props
    return(
        <div className="comb">
            <div to={link} className="comb__background">
                <img src={combBackground} alt="combBackground" />
            </div>
            <div className="comb__front">
                <h3>{children}</h3>
            </div>
            <div className="comb__back">
                <h3>{titleBack}</h3>
                <p>{descBack}</p>
            </div>
        </div>
    )
}

export default Comb;