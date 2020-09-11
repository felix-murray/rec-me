import React from "react";
import styles from "./Recorder.module.css";

import RecordButton from "../RecordButton";
import PauseButton from "../PauseButton";

const Recorder = (props) => {
    /*
        Track states of recording using React hooks.
        https://reactjs.org/docs/hooks-state.html
    */
    const [isRecording, setIsRecording] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    const chunksRef = React.useRef([]);
    const recorderRef = React.useRef(null);

    const handleStart = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });

        recorderRef.current = new MediaRecorder(stream, {
            mimeType: "audio/webm; codecs=opus",
        });

        recorderRef.current.start();

        recorderRef.current.ondataavailable = (event) => {
            chunksRef.current.push(event.data);
        };

        recorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, {
                type: "audio/webm; codecs=opus",
            });
            props.onAudio(blob);
        };

        setIsRecording(true);
    };

    const handleStop = () => {
        recorderRef.current.stop();
        chunksRef.current = [];
        setIsRecording(false);
    };

    const handlePause = () => {
        recorderRef.current.pause();
        setIsPaused(true);
    };

    const handleResume = () => {
        recorderRef.current.resume();
        setIsPaused(false);
    };

    return (
        <div className={styles.Recorder}>
            <RecordButton
                recording={isRecording}
                onStart={handleStart}
                onStop={handleStop}
            />
            <PauseButton
                recording={isRecording}
                paused={isPaused}
                onPause={handlePause}
                onResume={handleResume}
            />
        </div>
    );
};

export default Recorder;
