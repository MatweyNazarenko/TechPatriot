import { useState } from 'react';
import CardSlider from './CardSlider';
import SettingBar from './SettingBar/SettingBar';
import ModelViewer from './3d/ModelViewer';
import { modelsList } from '../../library/data';
const View3dPage = () => {
	const [controlStates, setControlStates] = useState({
		autoRotate: false,
		autoRotateSpeed: 1,
		scale: 0.01,
	});

	const overallScale = 1;

	

	return (
		<div className='scene3d'>
			<ModelViewer 
				models={modelsList}
				controlStates={controlStates}
			></ModelViewer>
			<SettingBar
				controlStates={controlStates}
				setControlStates={setControlStates}
			></SettingBar>
		</div>
	);
};
export default View3dPage;
