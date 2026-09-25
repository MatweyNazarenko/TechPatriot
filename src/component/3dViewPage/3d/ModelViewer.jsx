import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import useModalSlide from '../../../hooks/3d/useModelSlide';
import ModelControlUI from './ModelControlUI';
import CameraObject from './CameraObject';
import { Canvas } from '@react-three/fiber';

const ModelViewer = (props) => {
	const { models, controlStates } = props;

	const {
		nextClick,
		prevClick,
		currentItem = 0,
	} = useModalSlide(models.length);

	const safeItem =
		typeof currentItem === 'number' && !isNaN(currentItem)
			? currentItem
			: 0;

	const currentComponent = models[safeItem];
	const CurrentModel = currentComponent?.model;

	return (
		<>
			<Canvas className='canvas3D'>
				<Suspense fallback={null}>
					{currentComponent?.path && (
						<CurrentModel
							key={safeItem}
							path={currentComponent.path}
							overallScale={0.01}
						></CurrentModel>
					)}
					<Environment preset='sunset'></Environment>
				</Suspense>
				<CameraObject
					cameraPreset='front'
					cameraDistance={4}
					controlStates={controlStates}
				></CameraObject>
			</Canvas>
			<ModelControlUI
				title={currentComponent?.title || 'Нет названия'}
				currentSlide={safeItem}
				total={models.length}
				onNext={nextClick}
				onPrev={prevClick}
			></ModelControlUI>
		</>
	);
};

export default ModelViewer;
