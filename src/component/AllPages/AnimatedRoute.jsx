import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import MainPage from "../MainPage/MainPage";
import View3dPage from "../3dViewPage/View3dPage";
import Timeline from "../TimeLine/Timeline";

const AnimatedRoute = (props) => {
    const {
        pageVariants = {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
        }, pageTransition = {
            duration: 0.3,
            ease: "easeInOut",
        }
    } = props;

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <MainPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/view"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <View3dPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/Timeline"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Timeline />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute;
