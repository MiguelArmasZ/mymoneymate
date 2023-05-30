import { useParams } from 'react-router-dom'
import { axiosClient } from '../../config'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'
import { useState } from 'react'

export const useNewPassword = () => {
  const [passwordChanged, setPasswordChanged] = useState<boolean>(false)
  const { setFeedbackActive } = useMainContext()
  const { passwordIsToShort } = useValidations()
  const { token } = useParams()

  async function handleNewPassword(password: string) {
    if (!passwordIsToShort(password)) return false

    try {
      const dataToSend = { password }
      const {
        data: { msg }
      } = await axiosClient.post(`/user/forgot-password/${token}`, dataToSend)
      setFeedbackActive(msg, false)
      setPasswordChanged(true)
    } catch (error: any) {
      console.error(
        `El error a la hora de definir una nueva contraseña es: ${error}`
      )
      setFeedbackActive(error.response.data.msg)
    }
    return true
  }

  return { passwordChanged, handleNewPassword }
}
