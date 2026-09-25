import { useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';

const ModelObject = (props) => {
	const { path, overallScale = 1 } = props;

	const modelRef = useRef(null);

	const fbx = useFBX(path);

	const scene = useMemo(() => SkeletonUtils.clone(fbx), [fbx]);

	const scaleTracker = useRef(overallScale * 0.1);

	useEffect(() => {
		scaleTracker.current = overallScale * 0.1;
	}, [overallScale, path]);

	useFrame(() => {
		if (!modelRef.current) return;

		if (scaleTracker.current < overallScale) {
			scaleTracker.current +=
				(overallScale - scaleTracker.current) * 0.1;

			modelRef.current.scale.setScalar(scaleTracker.current);
		}
	});



	return (
			<primitive
				ref={modelRef}
				{...props}
				object={scene}
				scale={[overallScale, overallScale, overallScale]}
			/>
	);
};

export default ModelObject;
