import Axios from 'axios'

export const API_BASE_URL = 'http://localhost:8000/api'
export const SERVER_BASE_URL = 'http://localhost:8000'

const interceptorRequest = (config) => {
  return {
    baseURL: API_BASE_URL,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  }
}

Axios.interceptors.request.use(
  (config) => {
    return interceptorRequest(config)
  },
  (error) => Promise.reject(error)
)

Axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err.response.data)
  }
)
