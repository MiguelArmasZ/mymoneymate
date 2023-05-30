import { Text } from './Text'
import isEmptySVG from '../../../assets/svg/is-empty.svg'
import { Div } from './Boxes'
import css from '../../../styles/components/IsEmpty.module.css'

interface Props {
  children: string
}

export const IsEmpty = ({ children }: Props) => {
  return (
    <Div cssx={css.Wrap}>
      <Text cssx="color-gray">{children}</Text>
      <img
        className={css.Img}
        src={isEmptySVG}
        alt="ilustración de que no hay datos"
      />
    </Div>
  )
}
