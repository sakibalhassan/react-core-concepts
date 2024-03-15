import { useState } from "react"

export default function Counterr() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const HandleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (


        <div style={{ border: '2px solid green' }}>
            <h3> Counterr:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={HandleReduce}>Reduce</button>
        </div>
    )
}