import { IoIosArrowUp } from "react-icons/io";

import styles from './SettingBar.module.css';

const SettingBar = (props) => {

    const{
        controlStates,
        setControlStates,
    } = props;

    const autoRotateChange = (event)=>{
        setControlStates((prev)=>({
            ...prev,
            autoRotate: event.target.checked,
        }))
    }

    const rotateSpeed = (d)=>{
        setControlStates((prev)=>({
            ...prev,
            autoRotateSpeed: Math.min(10, Math.max(0.5, prev.autoRotateSpeed + d)),
        }))
    }

    return (
        <div className={styles.settingBar}>
            <div className={styles.mainBtn}>
                <IoIosArrowUp className={styles.icon}/>
            </div>
            <div className={styles.settingPanel}>
                <div className={styles.rotEnable}>
                    <h3 className={styles.title}>Скорость</h3>
                    <input type="checkbox" id="rotEnable" onChange={autoRotateChange} checked={controlStates.autoRotate}/>
                    <label htmlFor="rotEnable">
                        <div className={styles.checker}>
                        </div>
                    </label>
                </div>
                <div className={styles.speedRot}>
                    <div className={styles.numBlock}>
                        {controlStates.autoRotateSpeed}
                    </div>
                    <button onClick={()=>rotateSpeed(0.5)}>
                        +
                    </button>
                    <button onClick={()=>rotateSpeed(-0.5)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SettingBar;