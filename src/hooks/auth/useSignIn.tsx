import { axiosClient } from '../../config'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'
import { useNavigate } from 'react-router-dom'

export const useSignIn = () => {
  const {
    allFieldsAreRequired,
    valueIsToShort,
    emailNotValid,
    passwordIsToShort,
    passwordsNotEquals
  } = useValidations()
  const { setFeedbackActive } = useMainContext()
  const navigate = useNavigate()

  async function handleSignIn(
    fields: object,
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    if (!allFieldsAreRequired(fields)) return false
    if (!valueIsToShort(userName)) return false
    if (!emailNotValid(email)) return false
    if (!passwordIsToShort(password)) return false
    if (!passwordsNotEquals(password, passwordConfirm)) return false

    try {
      const dataToSend = {
        userName,
        email,
        password
      }
      const {
        data: { msg }
      } = await axiosClient.post('/user', dataToSend)

      setTimeout(() => {
        navigate('/')
      }, 2000)

      setFeedbackActive(msg, false)
      return true
    } catch (error: any) {
      console.error(`El error al momento de crear un usuario es: ${error}`)
      setFeedbackActive(error.response.data.msg)
      return false
    }
  }

  return { handleSignIn }
}
