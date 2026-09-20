import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const ModalObject = (props)=>{
    const{
        model
    }=props;

    const groupRef = useRef(null),
        animRef = useRef(null);

    useEffect(()=>{
        animRef.current = {
            startTime: performance.now(),
            duration: 400,
            targetScale: overallScale,
        };

        if(groupRef.current){
            const initial = overallScale * 0.1;

            groupRef.current.scale.set(initial, initial, initial);
        }
    }, [model.id, overallScale]);

    useFrame(()=>{
        if(animRef.current && groupRef.current){
            const elapsed = performance.now() - animRef.current.startTime;

            const progress = Math.min(1, elapsed / animRef.current.duration);

            const c1 = 1.70158,
                c3 = c1 + 1,
                ease = 1 + c3 * (progress - 1)**3 + c1 * (progress - 1)**2
        }


    });

    return(
        <>
        
        </>
    )
}

export default ModalObject;