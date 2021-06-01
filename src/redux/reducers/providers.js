import { SET_PROVIDER, TOGGLE_IS_FETCHING } from "../actions/providers"

const initialState = {
  providers: [],
  isFetching: false
}


const providers = (state = initialState, action) => {
  switch(action.type){
    case SET_PROVIDER: 
    return {
      ...state,
      providers: [...action.payload],
      isFetching: false
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default: 
      return state
  }
}


export default providers