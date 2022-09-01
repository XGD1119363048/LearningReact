import React, { useState } from 'react'

export default function App() {

    const [state, setState] = useState("hanfei");
    const [age, setAge] = useState(100)

    return (
        <div>
            <button onClick={() => {
                setState("xiaoming")
            }}>click
            </button>
            app-{state}-{age}
        </div>
    )
}
