import css from '../../../styles/components/Form.module.css'

interface Props {
  children: string
}

export const FormHeading = ({ children }: Props) => {
  return <h2 className={css.FormHeading}>{children}</h2>
}
