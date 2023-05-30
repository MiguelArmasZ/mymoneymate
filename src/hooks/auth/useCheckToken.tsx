import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../../config'
import { useMainContext } from '../context/useMainContext'

export const useCheckToken = () => {
  const { token } = useParams()
  const [userExisting, setUserExisting] = useState<boolean>(false)
  const { setFeedbackActive } = useMainContext()

  useEffect(() => {
    async function checkToken() {
      try {
        await axiosClient.get(`/user/forgot-password/${token}`)
        setUserExisting(true)
      } catch (error: any) {
        console.error(`El error a la hora de comprobar el token es: ${error}`)
        setUserExisting(false)
        setFeedbackActive(error.response.data.msg)
      }
    }
    void checkToken()
  }, [])

  return { userExisting }
}
