import { motion } from "framer-motion";

const StateCard = (props) => {
    const { statement, num, total, swipe } = props;

    return (
        <motion.div
            className="statement__card"
            {...swipe.dragProps}
        >
            <span>
                Утверждение {num + 1} из {total}
            </span>
            <p>{statement}</p>
        </motion.div>
    );
};

export default StateCard;
