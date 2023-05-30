import { Link } from 'react-router-dom'
import css from '../../../styles/components/Menu.module.css'
import CategoriesIcon from '../../../assets/icons/categories.png'
import ListIcon from '../../../assets/icons/list.png'
import CalendarIcon from '../../../assets/icons/calendar.png'
import SettingsIcon from '../../../assets/icons/settings.png'
import { Add } from './Add'

const linksToMenu = [
  {
    to: '/balance',
    alt: 'icono de registros',
    icon: ListIcon
  },
  {
    to: '/balance/categories',
    alt: 'icono de categorías',
    icon: CategoriesIcon
  },
  {
    to: '',
    alt: 'icono de agregar un registro',
    icon: ''
  },
  {
    to: '/balance/history',
    alt: 'icono de calendario',
    icon: CalendarIcon
  },
  {
    to: '/balance/settings',
    alt: 'icono de configuración',
    icon: SettingsIcon
  }
]

export const Menu = () => {
  return (
    <nav className={`${css.Menu} bg-black`}>
      {linksToMenu.map(({ alt, icon, to }, i) => {
        if (icon === '') {
          return <Add key={i} />
        }
        return (
          <Link key={i} to={to}>
            <img className={css.Icon} src={icon} alt={alt} />
          </Link>
        )
      })}
    </nav>
  )
}
