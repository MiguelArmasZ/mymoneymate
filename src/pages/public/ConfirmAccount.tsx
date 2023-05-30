import { Link } from 'react-router-dom'
import { Div, Feedback, Heading, Text } from '../../components/ui'
import { useConfirmAccount } from '../../hooks'
import cssBoxes from '../../styles/components/Boxes.module.css'
import cssText from '../../styles/components/Text.module.css'
import cssButton from '../../styles/components/Button.module.css'

export const ConfirmAccount = () => {
  const { userConfirmed } = useConfirmAccount()

  return (
    <Div cssx={`${cssBoxes.ConfirmAccount} shadow-medium fadeIn`}>
      <Heading cssx="bg-main">confirma tu cuenta</Heading>
      <Feedback />
      {userConfirmed ? (
        <Link className={cssButton.Button} to="/">
          iniciar sesión
        </Link>
      ) : (
        <Text cssx={`${cssText.TextConfirmAccount}`}>
          el token ha caducado o no existe, intentalo de nuevo
        </Text>
      )}
    </Div>
  )
}
