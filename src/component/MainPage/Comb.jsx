import combBackground from '../../img/comb.png'
import { Link } from 'react-router-dom'
const Comb = (props)=>{
    const{
        children,
        titleBack,
        descBack,
        link, 
        to
    }=props
    return(
        <Link to={to} className="comb">
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
        </Link>
    )
}

export default Comb;