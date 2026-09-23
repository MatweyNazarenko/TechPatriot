import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import CardSlider from './CardSlider';
import ModalObject from './3d/ModalObject';
import { Environment } from '@react-three/drei';
import CameraObject from './3d/CameraObject';
import SettingBar from './SettingBar/SettingBar';

const View3dPage = () => {
	const [controlStates, setControlStates] = useState({
		autoRotate: false,
		autoRotateSpeed: 1,
		scale: 0.01,
	});

	return (
		<div className='scene3d'>
			<Canvas className='canvas3D'>
				<Suspense fallback={null}>
					<ModalObject
						scale={controlStates.scale}
						overallScale={controlStates.scale}
					></ModalObject>
					<Environment preset='sunset'></Environment>
				</Suspense>
				<CameraObject
					cameraPreset='front'
					cameraDistance={4}
					controlStates={controlStates}
				></CameraObject>
			</Canvas>
			<CardSlider></CardSlider>
			<SettingBar
				controlStates={controlStates}
				setControlStates={setControlStates}
			></SettingBar>
		</div>
	);
};
export default View3dPage;
