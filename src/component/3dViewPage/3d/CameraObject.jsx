import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const CameraObject = (props) => {
	const { 
        cameraPreset, 
        cameraDistance = 5, 
        controlStates,
        onPesetHandled
    } = props;

	const { camera } = useThree();
	const controlRef = useRef(null);

	let targetX = 0,
		targetY = 0,
		targetZ = 0;

	useEffect(() => {
		if (!cameraPreset || !controlRef.current) return;

		const distance = cameraDistance || 5;
		const control = controlRef.current;

		switch (cameraPreset) {
			case 'front':
				targetX = 0;
				targetY = distance/2;
				targetZ = distance;
				break;
			case 'top':
				targetX = 0;
				targetY = distance;
				targetZ = 0;
				break;
			case 'reset':
				targetX = distance * 0.65;
				targetY = distance * 0.55;
				targetZ = distance * 0.75;
				break;
			default:
				return;
		}

		gsap.to(camera.position, {
			x: targetX,
			y: targetY,
			z: targetZ,
			duration: 1.2,
			ease: 'power2.inOut',
			onUpdate: () => control.update(),
		});

		gsap.to(control.target, {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.2,
			ease: 'power2.inOut',
			onUpdate: () => control.update(),
		});

		if (onPesetHandled) {
			onPesetHandled();
		}
	}, [cameraPreset, onPesetHandled]);

	return (
		<OrbitControls
			ref={controlRef}
            makeDefault
			enableDamping={true}
			dampingFactor={0.05}
			minDistance={0.4}
			maxDistance={20}
			maxPolarAngle={Math.PI}
            autoRotate={controlStates.autoRotate}
            autoRotateSpeed={controlStates.autoRotateSpeed}
		></OrbitControls>
	);
};

export default CameraObject;
