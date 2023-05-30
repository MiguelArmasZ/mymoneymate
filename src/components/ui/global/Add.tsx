import { Link } from 'react-router-dom'
import css from '../../../styles/components/Add.module.css'

export const Add = () => {
  return (
    <Link to="/balance/recording" className={`${css.Add} bg-main`}>
      <span className={css.Line}></span>
      <span className={css.Line}></span>
    </Link>
  )
}
