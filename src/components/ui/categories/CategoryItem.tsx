import css from '../../../styles/components/Category.module.css'
import Edit from '../../../assets/svg/edit.svg'
import Remove from '../../../assets/svg/trash.svg'
import { useDeleteCategory, useUpdateCategory } from '../../../hooks'

interface Props {
  name: string
  id: string
}

export const CategoryItem = ({ name, id }: Props) => {
  const { onUpdateCategory } = useUpdateCategory()
  const { onDeleteCategory } = useDeleteCategory()

  return (
    <li className={css.Item}>
      <p>{name}</p>
      <div className={css.Keypad}>
        <button
          id={id}
          name={name}
          onClick={onUpdateCategory}
          className={css.Button}
        >
          <img src={Edit} alt="icono de editar" />
        </button>
        <button
          id={id}
          name={name}
          onClick={onDeleteCategory}
          className={css.Button}
        >
          <img src={Remove} alt="icono de eliminar" />
        </button>
      </div>
    </li>
  )
}
