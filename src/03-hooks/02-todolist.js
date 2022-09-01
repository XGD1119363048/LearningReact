import React, {useState} from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa","bb","cc"])
    
    const handleAdd = () => {
        console.log(text);
        setList([...list,text])
        // 输入框的状态变成空字符串
        setText('')
    }

    const handleDel = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <input value={text} onChange={(evt) => {
                console.log(evt.target.value);
                setText(evt.target.value)
            }}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item,index) => 
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
