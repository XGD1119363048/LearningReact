import React, { useState } from 'react'
import { connect } from 'react-redux'

function City(props) {
  const [list] = useState(['北京', '上海', '深圳', '广州'])
  return (
    <div>
      City
      <ul>
        {
          list.map(item => <li key={item} onClick={() => {
            props.change(item)
            // props.history.push('/cinemas')
            props.history.goBack()
          }}>{item}</li>)
        }
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  change(item) {
    return {
      type: 'change-city',
      value: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)
