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

// for getting user by Id
export const getUserById = async (id) => {
  try {
    const res = await Axios.get(`/user/${id}`)
    return res
  } catch (error) {
    throw error.data.error.message
  }
}

// for update user by ID
export const updateUserById = async (id, data) => {
  try {
    const res = await Axios.put(`/user/${id}`, data)
    return res
  } catch (error) {
    throw error.data.error.message
  }
}
