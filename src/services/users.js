import Axios from 'axios'

// for getting users list
export const getUsersList = async () => {
  try {
    const res = await Axios.get('/user')
    return res
  } catch (error) {
    throw error.data.error.message
  }
}

// for register user
export const registerUser = async (data) => {
  try {
    const res = await Axios.post('/user', data)
    return res
  } catch (error) {
    throw error.data.error.message
  }
}
