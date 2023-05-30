import { type ReactNode, useState } from 'react'
import { MainContext } from './MainContext'
import { type ConfirmationModal, type IFeedback } from '../../types'

interface Props {
  children: ReactNode
}

export const INITIAL_STATE_FEEDBACK: IFeedback = {
  active: false,
  error: true,
  msg: ''
}

const INITIAL_STATE_CONFIRMATION_CONFIG = {
  text: '',
  id: '',
  submitAction: async () => false
}

export const MainProvider = ({ children }: Props) => {
  const [feedback, setFeedback] = useState<IFeedback>(INITIAL_STATE_FEEDBACK)
  const [confirmationConfig, setConfirmationConfig] =
    useState<ConfirmationModal>(INITIAL_STATE_CONFIRMATION_CONFIG)

  const setFeedbackActive = (msg: string, error = true) => {
    setFeedback({ active: true, error, msg })
  }

  const resetFeedback = (time = 3500) => {
    setTimeout(() => {
      setFeedback(feedback)
    }, time)
  }

  const [confirmation, setConfirmation] = useState(false)

  const closeConfirmation = () => {
    setConfirmation(false)
  }

  return (
    <MainContext.Provider
      value={{
        feedback,
        setFeedback,
        setFeedbackActive,
        resetFeedback,
        confirmation,
        setConfirmation,
        confirmationConfig,
        setConfirmationConfig,
        closeConfirmation
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
