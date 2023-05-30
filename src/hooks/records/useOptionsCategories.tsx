import { useEffect, useState } from 'react'
import { type Options } from '../../types'
import { useCategoriesContext } from '../context/useCategoriesContext'

export const useOptionsCategories = () => {
  const { categories } = useCategoriesContext()

  const [options, setOptions] = useState<Options[]>([])

  useEffect(() => {
    const categoriesName = categories.map(({ name }) => {
      return {
        value: name,
        text: name.toUpperCase()
      }
    })
    setOptions(categoriesName)
  }, [])

  return {
    options
  }
}
