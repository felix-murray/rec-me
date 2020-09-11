import React from "react";
import cn from "classnames";
import styles from "./RecordButton.module.css";

const RecordButton = (props) => {
    if (props.recording) {
        return (
            <button
                className={cn(styles.RecordButton, styles.stopped)}
                onClick={props.onStop}
            >
                Stop Recording
            </button>
        );
    } else {
        return (
            <button className={styles.RecordButton} onClick={props.onStart}>
                Record
            </button>
        );
    }
};

export default RecordButton;
