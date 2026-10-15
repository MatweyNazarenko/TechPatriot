import { createContext } from 'react';
import { useState } from 'react';

export const CardContext = createContext();

export const CardProvider = (props) => {
	const { children } = props;

	const [selectedId, setSelectedId] = useState(null);

	return (
		<CardContext.Provider value={{ selectedId, setSelectedId }}>
			{children}
		</CardContext.Provider>
	);
};
