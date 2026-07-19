import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(() => {
        console.log('Initial count state...');
        return 0;
    });

    const increment = () => {
        setCount((prevCount) => {
            console.log("Previous state:", {prevCount});
            return prevCount + 1;
        });
    }

    const decrement = () => {
        setCount((prevCount) => {
            console.log(prevCount);
            return prevCount - 1;
        })
    }

    return (
        <>
            <h1>Counter</h1>
            <span>Count: {count}</span><br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default Counter;