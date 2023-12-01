import axios from "axios"

/**
 * redux-chunk
 */
// function getCinemaListAction() {
//   return (dispatch) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1524161',
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       // console.log(res.data.data.cinemas)
//       dispatch({
//         type: 'change-list',
//         value: res.data.data.cinemas
//       })
//     })
//   }
// }

/**
 * redux-promise
 */
async function getCinemaListAction() {
  let list = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1524161',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    // console.log(res.data.data.cinemas)
    return {
      type: 'change-list',
      value: res.data.data.cinemas
    }
  })

  return list
}

export default getCinemaListAction