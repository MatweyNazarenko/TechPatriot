import { motion, AnimatePresence } from "framer-motion";
import unknown from '/img/unknown.png';
import { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const DetailedCard = (props) => {

    const {
        selectedId,
        image = null,
        person,
        setSelectedId,
    } = props;

    useEffect(() => {

        const keyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedId(null);
            }
        }


        document.addEventListener('keydown', keyDown)

        return () => {
            document.removeEventListener('keydown', keyDown)
        }
    }, [])


    return (
        <AnimatePresence>
            {
                selectedId && person && (
                    <motion.div
                        className="detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button 
                            className="detail__exit"
                            onClick={()=>setSelectedId(null)}
                        >
                            <IoMdCloseCircleOutline />
                        </button>
                        <div
                            className="detail__content"
                        >
                            <motion.div
                                className="detail__group detail__leftCards"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <div className="card">
                                    <h3>{person.info[1].title}</h3>
                                    <p>{person.info[1].text}</p>
                                </div>
                                <div className="card">
                                    <h3>{person.info[2].title}</h3>
                                    <p>{person.info[2].text}</p>
                                </div>
                                <div className="card">
                                    <h3>{person.info[3].title}</h3>
                                    <p>{person.info[3].text}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="detail__img"
                                layoutId={selectedId}
                            >
                                {image ? (
                                    <img src={image} alt={image} />
                                ) : (
                                    <img src={unknown} alt='unknown' />
                                )}
                            </motion.div>
                            <motion.div
                                className="detail__group detail__rightCards"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <div className="card">
                                    <h3>{person.info[4].title}</h3>
                                    <p>{person.info[4].text}</p>
                                </div>
                                <div className="card">
                                    <h3>{person.info[5].title}</h3>
                                    <p>{person.info[5].text}</p>
                                </div>
                                <div className="card">
                                    <h3>{person.info[6].title}</h3>
                                    <p>{person.info[6].text}</p>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default DetailedCard;