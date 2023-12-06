import axios from 'axios'
import { observable, configure, action, runInAction } from 'mobx'
configure({
  enforceActions: 'always'
})

// const store = observable({
//   isTabbarShow: true,
//   list: [],
//   cityName: '北京',
//   changeShow() {
//     this.isTabbarShow = true
//   },
//   changeHide() {
//     this.isTabbarShow = false
//   }
// }, {
//   changeShow: action,
//   changeHide: action // 标记两个方法是action，专门修改可观测的value
// })

class Store {
  @observable isTabbarShow = true
  @observable list = []

  @action changeShow() {
    this.isTabbarShow = true
  }
  @action changeHide() {
    this.isTabbarShow = false
  }
  
  @action async getList() {
    let list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1524161',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data.data.cinemas)
      return res.data.data.cinemas
    })
    runInAction(() => {
      this.list = list
    })
  }
}

const store = new Store()

export default store