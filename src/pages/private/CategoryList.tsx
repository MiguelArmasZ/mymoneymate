import {
  Button,
  CategoryModal,
  CategoryUl,
  Confirmation,
  Div,
  Heading,
  IsEmpty,
  Spinner
} from '../../components/ui'
import {
  useCategoriesContext,
  useGetCategories,
  useMainContext,
  useNewCategory
} from '../../hooks'
import css from '../../styles/components/Boxes.module.css'
import { type CategoryKinds } from '../../types'

interface Props {
  heading: string
  bg: string
  kind: CategoryKinds
}

export const CategoryList = ({ heading, bg, kind }: Props) => {
  const { loading, modal } = useCategoriesContext()
  const { categories } = useGetCategories(kind)
  const { onCreateCategory } = useNewCategory(kind)
  const { confirmation } = useMainContext()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Heading cssx={bg}>{heading}</Heading>
          <Div cssx={css.Variant1}>
            {categories.length !== 0 ? (
              <CategoryUl kind={kind} categories={categories} />
            ) : (
              <IsEmpty>no tienes categorías añadidas</IsEmpty>
            )}
            <Button
              enableDisabled={false}
              onClick={onCreateCategory}
              type="button"
            >
              agregar categoría
            </Button>
          </Div>
          {modal && <CategoryModal />}
          {confirmation && <Confirmation />}
        </>
      )}
    </>
  )
}
