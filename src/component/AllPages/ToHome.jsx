import { useEffect, useRef } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

const ToHome = ()=>{

    const linkRef = useRef(null);

    useEffect(()=>{
        const handleEsc = (event)=>{
            if(event.key === 'Escape'){
                linkRef.current?.click();
            }
        }

        document.addEventListener('keydown', handleEsc)

        return ()=>{
            document.removeEventListener('keydown', handleEsc);
        }
    }, [history])

    

    return(
        <Link 
            to="/"
            className="toHome"
            ref={linkRef}
        >
            <GrHomeRounded />
        </Link>
    )
}

export default ToHome;