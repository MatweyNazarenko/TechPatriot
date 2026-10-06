import unknown from '/img/unknown.png';
import { motion } from 'framer-motion';
const PersonCard = (props) => {
	const {
		image = null,
		name,
		about,
		life,
		place,
		contribution,
		id,
		setSelectedId
	} = props;
	return (
		<motion.div 
			className='persons__card' 
			id={id} 
			onClick={() => { setSelectedId(id) }}
		>
			<motion.div
				className='img'
				layoutId={id}
			>
				{image ? (
					<img src={image} alt={image} />
				) : (
					<img src={unknown} alt='unknown' />
				)}
			</motion.div>
			<div className='text'>
				<h3>{name}</h3>
				<p>{about}</p>
				<ul>
					<li key='title' className='title'>Вклад в науку и технику:</li>
					{contribution.map((item) => {
						return <li key={item}>{item}</li>
					})}
				</ul>
			</div>
			<div className="about">
				<div className="time">{life}</div>
				<div className="place">{place}</div>
			</div>
		</motion.div>
	);
};

export default PersonCard;
