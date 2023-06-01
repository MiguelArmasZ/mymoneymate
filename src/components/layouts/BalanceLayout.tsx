import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks'
import { Menu, Spinner } from '../ui'

export const BalanceLayout = () => {
  const { userLogged, loading } = useAuthContext()

  return (
    <>
      <main
        className="BalanceLayout Layout"
        style={{
          height: `calc(100vh - ${
            document.documentElement.scrollHeight - window.innerHeight
          }px - var(--menu-height))`
        }}
      >
        {loading ? (
          <Spinner />
        ) : userLogged._id.length > 0 ? (
          <>
            <Outlet />
          </>
        ) : (
          <Navigate to="/" />
        )}
        <Menu />
      </main>
    </>
  )
}
