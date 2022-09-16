import { useEffect } from "react";
import { createContext, useState } from "react";

export const TimerContext = createContext();

export function TimerProvider(props) {
    const initialState = {
        time: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        active: false,
    };

    const [timer, setTimer] = useState(initialState);

    useEffect(() => {
        const incrementTime = () => {
            return {
                ...timer,
                time: timer.time + 1,
                hours: Math.floor((timer.time + 1) / 3600),
                minutes: Math.floor(((timer.time + 1) % 3600) / 60),
                seconds: (timer.time + 1) % 60,
            };
        };

        const interval = setInterval(() => {
            if (timer.active) {
                setTimer(incrementTime());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            {props.children}
        </TimerContext.Provider>
    );
}
