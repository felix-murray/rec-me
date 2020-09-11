import React from "react";
import cn from "classnames";
import styles from "./PauseButton.module.css";

const PauseButton = (props) => {
    if (!props.recording) {
        return (
            <button className={cn(styles.PauseButton, styles.stopped)} disabled>
                Pause
            </button>
        );
    }

    if (props.paused) {
        return (
            <button
                className={cn(styles.PauseButton, styles.paused)}
                onClick={props.onResume}
            >
                Resume
            </button>
        );
    } else {
        return (
            <button className={styles.PauseButton} onClick={props.onPause}>
                Pause
            </button>
        );
    }
};

export default PauseButton;
