import Axios from 'axios'

// for getting dashboard stats
export const getUsersList = async () => {
  try {
    const res = await Axios.get('/user')
    return res
  } catch (error) {
    throw new Error(error)
  }
}
