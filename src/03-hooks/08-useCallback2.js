import React, { useState,useCallback,useMemo } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])
    const [myname, setMyname] = useState('hanfei')

    const handleAdd = useCallback(
        () => {
            console.log(text);
            setList([...list, text])
            // 输入框的状态变成空字符串
            setText('')
        },
        [text,list]
    )

    const handleDel = useMemo(
        ()=>(index) => {
            let newList = [...list]
            newList.splice(index, 1)
            setList(newList)
        },
        [list]
    )

    const handleChange = useCallback(
        (evt) => {
            console.log(evt.target.value);
            setText(evt.target.value)
        },
        [],
    )


    return (
        <div>
            {myname}-<button onClick={() => {
                setMyname("xiaoming")
            }}>change-myname</button>
            <input value={text} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>
                            {item}
                            <button onClick={() => handleDel(index)}>del</button>
                        </li>
                    )
                }
            </ul>


            {
                !list.length && <div>暂无代办事项</div>
            }
        </div>
    )
}
