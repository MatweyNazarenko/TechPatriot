import unknown from '/img/unknown.png';

const PersonCard = (props) => {
	const { image = null, name, about, life, place, contribution, who } =
		props;
	return (
		<div className='persons__card'>
			<div className='img'>
				{image ? (
					<img src={image} alt={image} />
				) : (
					<img src={unknown} alt='unknown' />
				)}
			</div>
			<div className='text'>
				<div className='who'>{who.join(', ')}</div>
				<h3>{name}</h3>
				<p>{about}</p>
                <ul>
                    <li key='title' className='title'>Вклад в науку и технику:</li>
                    {contribution.map((item)=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
			</div>
            <div className="about">
                <div className="time">{life}</div>
                <div className="place">{place}</div>
            </div>
		</div>
	);
};

export default PersonCard;
