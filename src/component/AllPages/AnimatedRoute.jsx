import { Route, Routes, useLocation, Navigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import MainPage from "../MainPage/MainPage";
import View3dPage from "../3dViewPage/View3dPage";
import Timeline from "../TimeLine/Timeline";
import PersonsMain from "../Persons/PersonsMain";
import TestsMain from "../TestContent/TestsMain";
import Statement from "../TestContent/tasks/Statement/Statement";
import Quiz from "../TestContent/tasks/Quiz/Quiz";
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
                <Route path="/index.html" element={<Navigate to="/" replace />} />
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
                    path="/timeline"
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
                <Route
                    path="/persons"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <PersonsMain></PersonsMain>
                        </motion.div>
                    }
                />
                <Route
                    path="/tests"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <TestsMain></TestsMain>
                        </motion.div>
                    }
                />
                <Route
                    path="/statement"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Statement></Statement>
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute;
