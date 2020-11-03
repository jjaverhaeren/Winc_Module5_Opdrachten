import React, {useState} from "react"

function App() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div>
            <section>{count}</section>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default App