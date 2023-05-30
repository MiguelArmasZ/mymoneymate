import css from '../../../styles/components/Heading.module.css'

interface Props {
  children: string
  cssx?: string
}

export const Heading = ({ children, cssx = '' }: Props) => {
  return <h2 className={`${css.Heading} ${cssx} fadeIn`}>{children}</h2>
}
