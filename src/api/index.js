import axios from 'axios'

export const jobsAPI = {
  getJobs(){
    return axios.get(`http://localhost:3001/jobs`)
  }
}

export const employeesAPI = {
  getEmployees(category, text){
    return axios.get(`http://localhost:3001/providers?${category !== null ? `job=${category}` : ''}`)
  }
}