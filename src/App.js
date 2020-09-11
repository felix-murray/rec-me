import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";

import Recorder from "./components/Recorder";

function App() {
    const [audios, setAudios] = React.useState([]);

    const handleAudio = (audio) => {
        const url = URL.createObjectURL(audio);
        setAudios([url, ...audios]);

        // fetch('/my/url', {
        //   method: 'POST',
        //   body: audio,
        //   contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        // })

        // Authorization: Bearer ${jwt}
    };

    const renderAudios = () => {
        return audios.map((url) => {
            return (
                <audio controls key={url}>
                    <source src={url} />
                </audio>
            );
        });
    };

    return (
        <div className={styles.App}>
            <Recorder onAudio={handleAudio} />
            <div className={styles.audiosWrapper}>
                <div className={styles.audios}>{renderAudios()}</div>
            </div>
        </div>
    );
}

export default App;
