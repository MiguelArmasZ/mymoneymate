import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  cssx: string
}

export const Div = ({ children, cssx }: Props) => {
  return <div className={cssx}>{children}</div>
}

export const Section = ({ children, cssx }: Props) => {
  return <section className={cssx}>{children}</section>
}
