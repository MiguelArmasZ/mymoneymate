import axios from 'axios'
import { axiosClient } from '../../config'
import { useAuthContext } from '../context/useAuthContext'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'

export const useLogIn = () => {
  const { allFieldsAreRequired, emailNotValid } = useValidations()
  const { setFeedbackActive, resetFeedback } = useMainContext()
  const { setUserLogged, setLoading } = useAuthContext()

  async function handleLogIn(fields: object, email: string, password: string) {
    if (!allFieldsAreRequired(fields)) return false
    if (!emailNotValid(email)) return false

    try {
      const dataToSend = {
        email,
        password
      }
      const { data } = await axios.post(
        'https://mymoneymate.onrender.com/user/log-in',
        dataToSend
      )
      localStorage.setItem('JWT', data.jwt)
      setUserLogged((data) => {
        return { ...data }
      })
      setLoading(true)

      return true
    } catch (error: any) {
      console.error(`El error iniciando sesión es: ${error}`)
      setFeedbackActive(error.response.data.msg)
      resetFeedback()
      return false
    }
  }

  return { handleLogIn }
}
