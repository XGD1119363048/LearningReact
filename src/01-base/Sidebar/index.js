import React from 'react'

export default function Sidebar(props) {

    let {bg, position} = props;

    let obj1 = {
        left: 0
    }

    let obj2 = {
        right: 0
    }

    let obj = {
        background: bg, 
        width: "200px",
        position: "fixed",
    }

    let styleobj = position === 'left' ? {...obj, ...obj1} : {...obj, ...obj2}

    return (
        <div style={styleobj}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    )
}
