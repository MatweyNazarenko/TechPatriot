import { motion, AnimatePresence } from "framer-motion";
import unknown from '/img/unknown.png';

const DetailedCard = (props) => {

    const {
        selectedId,
        image=null,
        id,
    } = props;

    return (
        <AnimatePresence>
            {
                selectedId && (
                    <motion.div
                        className="detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="detail__leftCards">

                        </div>
                        <div 
                            className="detail__img"
                            layoutId={id}   
                        >
                            {image ? (
                                <img src={image} alt={image} />
                            ) : (
                                <img src={unknown} alt='unknown' />
                            )}
                        </div>
                        <div className="detail_rightCards">

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default DetailedCard;