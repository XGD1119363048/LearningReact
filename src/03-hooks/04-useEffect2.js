import React, {useState,useEffect} from 'react'

export default function App() {

    const [name, setName] = useState('hanfei')

    useEffect(() => {
      setName(name.substring(0,1).toUpperCase() + name.substring(1))
    }, [name])
    

    return (
        <div>
            app-{name}
            <button onClick={() => {
                setName('xiaoming')
            }}>click</button>
        </div>
    )
}
