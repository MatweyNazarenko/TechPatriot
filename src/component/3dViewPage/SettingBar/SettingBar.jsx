import { IoIosArrowUp } from "react-icons/io";

import styles from './SettingBar.module.css'
import { style } from "framer-motion/client";

const SettingBar = () => {
    return (
        <div className={styles.settingBar}>
            <div className={styles.mainBtn}>
                <IoIosArrowUp className={styles.icon}/>
            </div>
            <div className={styles.settingPanel}>
                <div className={styles.rotEnable}>
                    <h3 className={styles.title}>Speed</h3>
                    <input type="checkbox" id="rotEnable" />
                    <label htmlFor="rotEnable">
                        <div className={styles.checker}>
                        </div>
                    </label>
                </div>
                <div className={styles.speedRot}>
                    <div className={styles.numBlock}>
                        1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingBar;