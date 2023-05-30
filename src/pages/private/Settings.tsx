import { useEffect, useState } from 'react'
import { Button, Heading } from '../../components/ui'
import { useAuthContext } from '../../hooks'
import css from '../../styles/components/Settings.module.css'
import { useNavigate } from 'react-router-dom'

export const Settings = () => {
  const [firstLetter, setfirstLetter] = useState('')
  const { userLogged, setUserLogged } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const getFirstLetter = userLogged.userName
      .split('', 1)
      .join('')
      .toUpperCase()
    setfirstLetter(getFirstLetter)
  }, [])

  function closeSesion() {
    localStorage.removeItem('JWT')
    setUserLogged({ _id: '', email: '', userName: '' })
    navigate('/')
  }

  return (
    <>
      <Heading cssx="bg-main">perfil</Heading>
      <div className={`${css.Wrap} fadeIn`}>
        <h3 className={`${css.Letter} bg-black`}>{firstLetter}</h3>
        <h3 className={css.Email}>{userLogged.email}</h3>

        <Button onClick={closeSesion} type="button">
          cerrar sesión
        </Button>
      </div>
    </>
  )
}
