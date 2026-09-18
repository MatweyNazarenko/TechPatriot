import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import CardSlider from './CardSlider';

const View3dPage = () => {
    const AnimatedBox = () => {
        const box = useRef();

        useFrame(({clock}) => {
            box.current.rotation.x = Math.sin(clock.elapsedTime);
        });

        return (
            <mesh ref={box} position={[0, 0.8, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="royalblue" />
            </mesh>
        )
    }

    return (
        <div className='scene3d'>
            <Canvas className="canvas3D">
                <ambientLight intensity={5} />
                <AnimatedBox></AnimatedBox>
            </Canvas>
            <CardSlider></CardSlider>
        </div>
    )
}
export default View3dPage;