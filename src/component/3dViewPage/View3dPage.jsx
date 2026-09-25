import { useState } from 'react';
import CardSlider from './CardSlider';
import SettingBar from './SettingBar/SettingBar';
import ModelViewer from './3d/ModelViewer';
import ModelObject from './3d/ModelObject';

const View3dPage = () => {
	const [controlStates, setControlStates] = useState({
		autoRotate: true,
		autoRotateSpeed: 1,
		scale: 0.01,
	});

	const overallScale = 1;

	const modelsList = [
		{
			title: 'LoremIpsum',
			path: '/models/b.fbx',
			model: ModelObject,
		},
		{
			title: 'Hello, World!',
			path: '/models/n.fbx',
			model: ModelObject,
		},
	];

	return (
		<div className='scene3d'>
			<ModelViewer 
				models={modelsList}
				controlStates={controlStates}
			></ModelViewer>
			<CardSlider></CardSlider>
			<SettingBar
				controlStates={controlStates}
				setControlStates={setControlStates}
			></SettingBar>
		</div>
	);
};
export default View3dPage;
