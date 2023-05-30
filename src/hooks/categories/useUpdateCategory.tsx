import { type MouseEvent } from 'react'
import { authConfig, axiosClient } from '../../config'
import { useCategoriesContext } from '../context/useCategoriesContext'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'

export const useUpdateCategory = () => {
  const { setFeedbackActive, resetFeedback } = useMainContext()
  const { setCategories, categories, setModal, setModalConfig } =
    useCategoriesContext()
  const { valueIsToShort } = useValidations()

  async function handleUpdateCategory(name: string, id: string) {
    if (!valueIsToShort(name)) return false

    resetFeedback()
    try {
      const { data } = await axiosClient.put(
        `/category/${id}`,
        { name },
        authConfig()
      )

      const filteredCategories = categories.filter(({ _id }) => _id !== id)
      const sortedCategories = [
        ...filteredCategories,
        data.categoryUpdated
      ].sort((a, b) => a.name.localeCompare(b.name))

      setCategories(sortedCategories)
      setFeedbackActive(data.msg, false)
    } catch (error: any) {
      console.error(`El error actualizando la categoría es: ${error}`)
      setFeedbackActive(error.response.data.msg)
    }
    return true
  }

  function onUpdateCategory(event: MouseEvent<HTMLButtonElement>) {
    const { id, name } = event.currentTarget
    setModal(true)
    setModalConfig({
      heading: 'editar categoría',
      submitName: 'actualizar',
      categoryToUpdate: {
        id,
        name
      },
      async submitAction(name) {
        return await handleUpdateCategory(name, id)
      }
    })
  }
  return {
    onUpdateCategory
  }
}
