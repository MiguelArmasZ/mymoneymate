import { type Options, type ILink } from '../types'

export const linksForLogIn: ILink[] = [
  { text: '¿no tienes una cuenta? Regístrate', to: '/sign-in' },
  { text: 'olvidé mi contraseña', to: '/forgot-password' }
]

export const linksForSignIn: ILink[] = [
  { text: '¿ya tienes una cuenta? inicia sesión', to: '/' },
  { text: 'olvidé mi contraseña', to: '/forgot-password' }
]

export const linksForForgotPassword: ILink[] = [
  { text: '¿ya tienes una cuenta? inicia sesión', to: '/' },
  { text: '¿no tienes una cuenta? Regístrate', to: '/sign-in' }
]

export const optionsToRecordKind: Options[] = [
  {
    value: 'spent',
    text: 'Gasto'
  },
  {
    value: 'income',
    text: 'Ingreso'
  }
]
