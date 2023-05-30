import { useContext } from 'react'
import { CategoriesContext } from '../../context'

export const useCategoriesContext = () => {
  return useContext(CategoriesContext)
}
