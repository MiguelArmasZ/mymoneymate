import { Route, Routes } from 'react-router-dom'
import { AuthLayout, BalanceLayout } from './components/layouts'
import {
  ConfirmAccount,
  ForgotPassword,
  LogIn,
  NewPassword,
  SignIn
} from './pages/public'
import { useListenUrl } from './hooks'
import {
  Balance,
  Categories,
  CategoryAnalysis,
  CategoryList,
  History,
  Recording,
  Records,
  Settings
} from './pages/private'
import { useEffect } from 'react'

export const App = () => {
  useListenUrl()

  useEffect(() => {
    console.log('v:1.0.4')
  }, [])

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LogIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="confirm/:token" element={<ConfirmAccount />} />
        <Route path="new-password/:token" element={<NewPassword />} />
      </Route>

      <Route path="/balance" element={<BalanceLayout />}>
        <Route index element={<Balance />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="categories/income"
          element={
            <CategoryList
              heading="categorías de ingreso"
              bg="bg-green"
              kind="income"
            />
          }
        />
        <Route
          path="categories/spent"
          element={
            <CategoryList
              heading="categorías de gasto"
              bg="bg-red"
              kind="spent"
            />
          }
        />
        <Route path="categories/analysis" element={<CategoryAnalysis />} />
        <Route path="recording" element={<Recording />} />
        <Route path="records" element={<Records />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
