import { createContext } from 'react'
import { type CategoryModal, type ICategory } from '../../types'

type SetCategories = (
  categories: ICategory[] | ((prev: ICategory[]) => ICategory[])
) => void

interface CategoriesContextTypes {
  categories: ICategory[]
  setCategories: SetCategories

  loading: boolean
  setLoading: (loading: boolean) => void

  modal: boolean
  setModal: (modal: boolean) => void
  closeModal: () => void

  modalConfig: CategoryModal
  setModalConfig: (config: CategoryModal) => void
}

export const CategoriesContext = createContext({} as CategoriesContextTypes)
