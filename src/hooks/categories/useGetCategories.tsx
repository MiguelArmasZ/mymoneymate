import { useEffect } from 'react'
import { authConfig, axiosClient } from '../../config'
import { type ICategory, type CategoryKinds } from '../../types'
import { useCategoriesContext } from '../context/useCategoriesContext'

export const useGetCategories = (kind: CategoryKinds) => {
  const { categories, setCategories, setLoading } = useCategoriesContext()

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axiosClient.get('/category', authConfig())
        const categories: ICategory[] = data

        const filteredCategories = categories
          .filter((category) => category.kind === kind)
          .sort((a, b) => a.name.localeCompare(b.name))

        setCategories(filteredCategories)
      } catch (error: any) {
        console.error(
          `El error al momento de obtener las categorás es: ${error}`
        )
      } finally {
        setLoading(false)
      }
    }
    void getCategories()
  }, [])

  return { categories }
}
