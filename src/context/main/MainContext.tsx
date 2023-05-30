import { createContext } from 'react'
import { type ConfirmationModal, type IFeedback } from '../../types'

interface MainContextTypes {
  feedback: IFeedback
  setFeedback: (feedback: IFeedback) => void

  setFeedbackActive: (msg: string, error?: boolean) => void
  resetFeedback: (time?: number) => void

  confirmation: boolean
  setConfirmation: (state: boolean) => void

  confirmationConfig: ConfirmationModal
  setConfirmationConfig: (config: ConfirmationModal) => void

  closeConfirmation: () => void
}

export const MainContext = createContext({} as MainContextTypes)
