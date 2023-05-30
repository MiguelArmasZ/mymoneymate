import { useEffect, useState } from 'react'
import { axiosClient } from '../../config'
import { useMainContext } from '../context/useMainContext'
import { useParams } from 'react-router-dom'

export const useConfirmAccount = () => {
  const [userConfirmed, setUserConfirmed] = useState<boolean>(false)
  const { setFeedbackActive } = useMainContext()
  const { token } = useParams()

  useEffect(() => {
    async function confirmAccount() {
      try {
        const {
          data: { msg }
        } = await axiosClient.get(`/user/confirm/${token}`)
        setFeedbackActive(msg, false)
        setUserConfirmed(true)
      } catch (error: any) {
        console.error(`El error a la hora de confirmar la cuenta es: ${error}`)
        setFeedbackActive(error.response.data.msg)
      }
    }
    void confirmAccount()
  }, [])

  return {
    userConfirmed
  }
}
