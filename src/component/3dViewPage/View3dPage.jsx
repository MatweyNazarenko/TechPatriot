import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';

const View3dPage = () => {
    const AnimatedBox = () => {
        const box = useRef();

        useFrame(({clock}) => {
            box.current.rotation.x = Math.sin(clock.elapsedTime);
        });

        return (
            <mesh ref={box} position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
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
        </div>
    )
}
export default View3dPage;