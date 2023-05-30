import css from '../../../styles/components/Category.module.css'
import { type ICategory, type CategoryKinds } from '../../../types'
import { CategoryItem } from './CategoryItem'

interface Props {
  kind: CategoryKinds
  categories: ICategory[]
}

export const CategoryUl = ({ categories }: Props) => {
  return (
    <ul className={`${css.List} shadow-medium`}>
      {categories.map(({ _id, name }) => (
        <CategoryItem key={_id} id={_id} name={name} />
      ))}
    </ul>
  )
}
