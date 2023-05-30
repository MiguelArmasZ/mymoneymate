import { createContext } from 'react'
import { type IUserLogged } from '../../types'

interface AuthContextTypes {
  userLogged: IUserLogged
  setUserLogged: (
    user: IUserLogged | ((prev: IUserLogged) => IUserLogged)
  ) => void

  loading: boolean
  setLoading: (loading: boolean) => void
}

export const AuthContext = createContext({} as AuthContextTypes)
