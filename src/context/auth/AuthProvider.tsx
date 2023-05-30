import { useState, type ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { type IUserLogged } from '../../types'
import { useGetProfile } from '../../hooks'

interface Props {
  children: ReactNode
}

const INITIAL_STATE_USER_LOGGED = {
  _id: '',
  email: '',
  userName: ''
}

export const AuthProvider = ({ children }: Props) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>(
    INITIAL_STATE_USER_LOGGED
  )
  const [loading, setLoading] = useState<boolean>(true)
  useGetProfile(setUserLogged, setLoading, loading)
  return (
    <AuthContext.Provider
      value={{
        userLogged,
        setUserLogged,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
