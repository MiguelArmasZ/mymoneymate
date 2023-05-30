import { authConfig, axiosClient } from '../../config'
import { useCategoriesContext } from '../context/useCategoriesContext'
import { useMainContext } from '../context/useMainContext'
import { useValidations } from '../global/useValidations'
import { type CategoryKinds } from '../../types'

export const useNewCategory = (kind: CategoryKinds) => {
  const { valueIsToShort } = useValidations()
  const { setFeedbackActive, resetFeedback } = useMainContext()
  const { setCategories, setModal, setModalConfig } = useCategoriesContext()

  async function handleCreateCategory(name: string) {
    if (!valueIsToShort(name)) return false

    try {
      const dataToSend = {
        name: name.toLowerCase(),
        kind
      }
      const { data } = await axiosClient.post(
        '/category',
        dataToSend,
        authConfig()
      )
      setCategories((prev) => [...prev, { ...data.newCategory }])

      setFeedbackActive(data.msg, false)
      resetFeedback(1000)

      return true
    } catch (error: any) {
      console.error(
        `El error al momento de registrar una nueva categoría es: ${error}`
      )
      resetFeedback()
      setFeedbackActive(error.response.data.msg)
      return false
    }
  }

  function onCreateCategory() {
    setModal(true)
    setModalConfig({
      heading: 'nueva categoría',
      submitName: 'crear',
      async submitAction(name) {
        await handleCreateCategory(name)
        return true
      }
    })
  }

  return {
    onCreateCategory,
    handleCreateCategory
  }
}
