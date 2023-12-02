import React, { useEffect } from 'react'
import axios from 'axios'

export default function ComingSoon() {
  
  useEffect(() => {
    axios.get('/ajax/comingList?ci=10&limit=10&movieIds=&token=&optimus_uuid=7EA972608E8611EEB14CC5151DE647AAB5623D3592534428B80C3A77E532EE50&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res)
    })
  }, [])
  
  return (
    <div>ComingSoon</div>
  )
}
