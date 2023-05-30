import { type MouseEvent } from 'react'
import { authConfig, axiosClient } from '../../config'
import { useCategoriesContext } from '../context/useCategoriesContext'
import { useMainContext } from '../context/useMainContext'

export const useDeleteCategory = () => {
  const {
    closeConfirmation,
    setFeedbackActive,
    setConfirmationConfig,
    setConfirmation
  } = useMainContext()
  const { categories, setCategories } = useCategoriesContext()

  async function handleDeleteCategory(id: string) {
    try {
      await axiosClient.delete(`/category/${id}`, authConfig())
      const filteredCategories = categories.filter(({ _id }) => _id !== id)

      setCategories(filteredCategories)
      closeConfirmation()
      return true
    } catch (error: any) {
      console.error(`El error eliminando la categoría es: ${error}`)
      setFeedbackActive(error.response.data.msg)
      return false
    }
  }

  function onDeleteCategory(event: MouseEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget
    setConfirmationConfig({
      text: '¿estás seguro de que quieres eliminar esta categoría?',
      id,
      submitAction: async () => {
        return await handleDeleteCategory(id)
      }
    })
    setConfirmation(true)
  }

  return {
    onDeleteCategory,
    handleDeleteCategory
  }
}
