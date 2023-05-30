import { type FormEvent, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  cssx: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const Form = ({ children, onSubmit, cssx }: Props) => {
  return (
    <form className={`${cssx} shadow-medium fadeIn`} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
