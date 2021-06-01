import { employeesAPI } from '../../api'

export const SET_PROVIDER = 'SET_PROVIDER'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const setProviders = (items) => ({ type: SET_PROVIDER, payload: items})
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching })

export const getProviders = (category, text) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const resp = await employeesAPI.getEmployees(category, text)
  dispatch(setProviders(resp.data))
}