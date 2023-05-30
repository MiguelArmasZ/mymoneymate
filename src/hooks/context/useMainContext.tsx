import { useContext } from 'react'
import { MainContext } from '../../context'

export const useMainContext = () => {
  return useContext(MainContext)
}
