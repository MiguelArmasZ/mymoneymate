export interface ILink {
  to: string
  text: string
}

export interface IFeedback {
  active: boolean
  error: boolean
  msg: string
}

export interface IUserLogged {
  _id: string
  userName: string
  email: string
}

export type CategoryKinds = 'income' | 'spent' | ''

export interface ICategory {
  _id: string
  name: string
  kind: CategoryKinds
}

interface CategoryToHandle {
  name: string
  id: string
}

export interface CategoryModal {
  heading: 'nueva categoría' | 'editar categoría'
  submitName: 'crear' | 'actualizar'
  submitAction: (name: string) => Promise<boolean>
  categoryToUpdate?: CategoryToHandle
}

export interface ConfirmationModal {
  text: string
  id: string
  submitAction: () => Promise<boolean>
}

export interface Options {
  value: string
  text: string
}

export type CurrentStepRecord = 0 | 1 | 2 | 3 | 4 | 5

export interface Record {
  _id: string
  kind: CategoryKinds
  date: string
  category: string
  amount: string
  concept: string
}

export interface MonthlySummary {
  spent: number
  income: number
  monthAndYear: string
  month: string
}

export interface AmountByCategory {
  name: string
  cantidad: number
}
