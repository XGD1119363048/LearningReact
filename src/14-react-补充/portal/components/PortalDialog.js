import React from 'react'
import { createPortal } from 'react-dom'

export default function Dialog(props) {
  return createPortal(
    <div style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'rgba(0,0,0,0.7)',
      zIndex: '999999',
      color: 'white'
    }}>
      Dialog-
      <div>loading-正在加载中</div>
      {props.children}
      <button onClick={props.onClose}>close</button>
    </div>,
    document.body
  )
}
