import React, {useState,useRef} from 'react'

export default function App() {

    const [list, setList] = useState(["aa","bb","cc"])
    const mytext = useRef()
    
    const handleAdd = () => {
        console.log(mytext.current.value);
        setList([...list,mytext.current.value])

        // 清空
        mytext.current.value = ''
    }

    const handleDel = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <input ref={mytext} />
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
