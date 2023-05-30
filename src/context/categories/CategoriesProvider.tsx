import { type ReactNode, useState } from 'react'
import { type CategoryModal, type ICategory } from '../../types'
import { CategoriesContext } from './CategoriesContext'

interface Props {
  children: ReactNode
}

export const CategoriesProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [modal, setModal] = useState<boolean>(false)
  const closeModal = () => {
    setModal(false)
  }
  const [modalConfig, setModalConfig] = useState<CategoryModal>({
    heading: 'nueva categoría',
    submitName: 'crear',
    submitAction: async () => true
  })

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        loading,
        setLoading,
        modal,
        setModal,
        closeModal,
        modalConfig,
        setModalConfig
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
