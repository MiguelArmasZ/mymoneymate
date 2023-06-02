import { useEffect } from 'react'
import { authConfig, axiosClient } from '../../config'
import { type IUserLogged } from '../../types'
import { useNavigate } from 'react-router-dom'

type setUserLogged = (user: IUserLogged) => void
type setLoading = (loading: boolean) => void

export const useGetProfile = (
  setUserLogged: setUserLogged,
  setLoading: setLoading,
  loading: boolean
) => {
  const navigate = useNavigate()

  useEffect(() => {
    async function authenticateUser() {
      const JWT = localStorage.getItem('JWT')

      if (JWT === null) {
        navigate('/')
        setLoading(false)
        return
      }

      try {
        const { data } = await axiosClient.get('/user/profile', authConfig())
        setUserLogged(data)
        navigate('/balance')
      } catch (error: any) {
        console.error(`El error al momento de obtener el perfil es: ${error}`)
        setUserLogged({ _id: '', email: '', userName: '' })
      } finally {
        setLoading(false)
      }
    }
    void authenticateUser()
  }, [loading])
}
