import Brunch from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Brunch.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', res.data.user.id)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Brunch.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Brunch.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}