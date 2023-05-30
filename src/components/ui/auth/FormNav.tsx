import css from '../../../styles/components/FormNav.module.css'
import { Link } from 'react-router-dom'
import { type ILink } from '../../../types'

interface Props {
  links: ILink[]
}

export const FormNav = ({ links }: Props) => {
  return (
    <nav className={`${css.FormNav} fadeIn animated`}>
      {links.map(({ text, to }, i) => (
        <Link key={i} className={css.Link} to={to}>
          {text}
        </Link>
      ))}
    </nav>
  )
}
