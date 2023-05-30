import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <main className="AuthLayout Layout">
      <Outlet />
    </main>
  )
}
