import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react';
import CardSlider from './CardSlider';
import ModalObject from './3d/ModalObject';
import { Environment, OrbitControls } from '@react-three/drei';
const overallScale = 0.01;

const View3dPage = () => {

    return (
        <div className='scene3d'>
            <Canvas className="canvas3D">
                <Suspense 
                    fallback={null}>
                    <ModalObject scale={0.01} overallScale={overallScale}></ModalObject>
                    <Environment preset='sunset'></Environment>
                    <OrbitControls
                        minDistance={1}
                        maxDistance={15}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2} 
                        minAzimuthAngle={-Math.PI / 4}
                        maxAzimuthAngle={Math.PI / 4}

                        // enablePan={false}
                        // enableDamping={true}
                        // dampingFactor={0.05}    
                    ></OrbitControls>
                </Suspense>
            </Canvas>
            
            <CardSlider></CardSlider>
        </div>
    )
}
export default View3dPage;


