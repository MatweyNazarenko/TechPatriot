import combPicture from '../assets/comb.png'

type combProp = {
    children:string;
    title:string;
    desc:string;
}

const Comd = ({children,title,desc}:combProp)=>{
    return(
        <div className="comb">
            <div className="comb__front">
                <h3>{children}</h3>
            </div>
            <div className="comb__back">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="comb__background">
                <img src={combPicture} alt="combPicture" />
            </div>
        </div>
    )
}
export default Comd;