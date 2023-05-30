import { axiosClient } from '../../config'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'

export const useForgotPassword = () => {
  const { setFeedbackActive, resetFeedback } = useMainContext()
  const { emailNotValid } = useValidations()

  async function handleForgotPassword(email: string) {
    if (!emailNotValid(email)) return false

    try {
      const dataToSend = { email }
      const {
        data: { msg }
      } = await axiosClient.post('/user/forgot-password', dataToSend)
      setFeedbackActive(msg, false)
    } catch (error: any) {
      console.error(
        `El error a la hora de enviar el email para recuperar el acceso es: ${error}`
      )
      setFeedbackActive(error.response.data.msg)
      resetFeedback()
    }
    return true
  }

  return { handleForgotPassword }
}
