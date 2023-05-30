import { Link } from 'react-router-dom'
import css from '../../../styles/components/Card.module.css'
import { Text } from './Text'

interface Props {
  icon: string
  to: string
  alt: string
  bg: string
  text: string
}

export const Card = ({ alt, bg, icon, to, text }: Props) => {
  return (
    <Link to={to} className={`${css.Card} ${bg} fadeIn shadow-medium`}>
      <Text>{text}</Text>
      <img className={css.Icon} src={icon} alt={alt} />
    </Link>
  )
}
