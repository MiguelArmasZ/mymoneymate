import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks'
import { Menu, Spinner } from '../ui'

export const BalanceLayout = () => {
  const { userLogged, loading } = useAuthContext()

  return (
    <main className="BalanceLayout Layout">
      {loading ? (
        <Spinner />
      ) : userLogged._id.length > 0 ? (
        <>
          <Outlet />
          <Menu />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </main>
  )
}
