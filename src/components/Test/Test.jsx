import React from "react";
import { useState, useEffect, useContext } from "react";
import { TimerContext } from "../../TimerContext";

export default function Test() {
    const { timer, setTimer } = useContext(TimerContext);
    const [reset, setReset] = useState(false);

    const toggleTimer = () => {
        timer.active
            ? setTimer({ ...timer, active: false })
            : setTimer({ ...timer, active: true });
    };

    useEffect(() => {
        (() => {
            reset &&
                setTimer({
                    ...timer,
                    active: timer.active,
                    time: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
        })();

        setReset(false);
    }, [reset]);

    return (
        <div>
            <div>
                {timer.hours < 10 ? "0" + timer.hours : timer.hours}:
                {timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}:
                {timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}
            </div>
            <button onClick={toggleTimer}>
                {timer.active ? "Pause timer 1" : "Start timer 1"}
            </button>
            <button onClick={() => setReset(true)}>Reset timer 2</button>
        </div>
    );
}
