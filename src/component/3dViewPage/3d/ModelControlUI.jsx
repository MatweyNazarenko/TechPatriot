import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import CardSlider from '../CardSlider';
import { modelsList } from '../../../library/data';
const ModelControlUI = (props) => {
	const { title, currentSlide, total, onNext, onPrev } = props;

	return (
		<>
			<div className='scene3d__modelUI'>
				<button className='arrowBtn' onClick={onPrev}>
					<IoIosArrowBack />
				</button>
				<div className='title'>
					<h2>{title}</h2>
					<p>
						{currentSlide + 1} / {total}
					</p>
				</div>
				<button className='arrowBtn' onClick={onNext}>
					<IoIosArrowForward />
				</button>
			</div>
			<CardSlider modelInfo={modelsList[currentSlide]}></CardSlider>
		</>

	);
};

export default ModelControlUI;
