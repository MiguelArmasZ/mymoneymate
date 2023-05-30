import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

export const authConfig = () => {
  const JWT = localStorage.getItem('JWT')
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JWT}`
    }
  }
}
