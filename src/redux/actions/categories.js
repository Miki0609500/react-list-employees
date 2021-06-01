import { jobsAPI } from "../../api"

export const SET_JOBS = 'SET_JOBS'
export const SET_LOADING = 'SET_LOADING'

const setJobs = (categories) => ({ type: SET_JOBS, payload: categories})
const setLoading = (isLoading) => ({ type: SET_LOADING, payload: isLoading})

export const getJobs = () => async (dispatch) => {
  dispatch(setLoading(true))
  const resp = await jobsAPI.getJobs()
  dispatch(setJobs(resp.data))
}