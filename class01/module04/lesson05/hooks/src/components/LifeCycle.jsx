import { useState, useEffect } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => {clearInterval(timerId);
            console.log('componente desmontado');
        }

    }, []);
    return ( 
        <div>
            <h1>TimerComponent</h1>
            <p>Count: {count}</p>
        </div>
    )}

export default TimerComponent

    