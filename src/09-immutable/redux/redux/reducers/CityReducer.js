import { fromJS } from "immutable"

const CityReducer = (prevState = {
  cityName: '北京'
}, action = {}) => {
  let newState = fromJS(prevState)
  switch (action.type) {
    case 'change-city':
      // newState.cityName = action.value
      return newState.set('cityName', action.value).toJS()
    default:
      return prevState
  }
}

export default CityReducer