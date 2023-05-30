import { type MouseEvent } from 'react'
import { useMainContext } from '../../../hooks'
import css from '../../../styles/components/Button.module.css'

interface Props {
  children: string
  type: 'button' | 'submit'
  cssx?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  enableDisabled?: boolean
  initDisabled?: boolean
}

export const Button = ({
  children,
  type,
  cssx = '',
  enableDisabled = true,
  initDisabled = false,
  onClick
}: Props) => {
  const { feedback } = useMainContext()

  function disabledConfig() {
    if (feedback.active && enableDisabled) return true
    if (initDisabled) return true
  }

  return (
    <button
      onClick={onClick}
      disabled={disabledConfig()}
      type={type}
      className={`${css.Button} ${cssx}`}
    >
      {children}
    </button>
  )
}
