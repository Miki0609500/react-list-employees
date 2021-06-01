import { SET_JOBS, SET_LOADING } from "../actions/categories"

const initialState = {
  items: [],
  isLoading: false
}


const categories = (state = initialState, action) => {
  switch(action.type){
    case SET_JOBS: 
    return {
      ...state,
      items: [...action.payload],
      isLoading: false
    }
    case SET_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export default categories