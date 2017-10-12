import { combineReducers } from 'redux'

const DefaultState = {}
const AppReducer = (state = DefaultState, action)=> {
    if (undefined !== action)
    switch(action.type) {

    }
    return state
}


const AllReducers = combineReducers({
  AppReducer: AppReducer
})

export default AllReducers
