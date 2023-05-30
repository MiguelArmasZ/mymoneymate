import { type FormEvent } from 'react'
import {
  Button,
  Div,
  Feedback,
  Form,
  FormHeading,
  Heading,
  NormalField,
  Text
} from '../../components/ui'
import { useCheckToken, useField, useNewPassword } from '../../hooks'
import css from '../../styles/components/Form.module.css'
import { Link } from 'react-router-dom'
import cssBoxes from '../../styles/components/Boxes.module.css'
import cssText from '../../styles/components/Text.module.css'
import cssButton from '../../styles/components/Button.module.css'

export const NewPassword = () => {
  const { fields, handleChange, handleSubmit } = useField({
    password: ''
  })
  const { userExisting } = useCheckToken()
  const { passwordChanged, handleNewPassword } = useNewPassword()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    void handleSubmit(event, async () => {
      return await handleNewPassword(fields.password)
    })
  }

  return (
    <>
      {userExisting ? (
        <Form cssx={`${css.Form} ${css.FormAuth}`} onSubmit={onSubmit}>
          <FormHeading>nueva contraseña</FormHeading>
          <NormalField
            onChange={handleChange}
            inputType="password"
            id="password"
            name="password"
            label="contraseña"
            placeholder="Define una nueva contraseña"
            value={fields.password}
          />
          <Feedback />
          {passwordChanged ? (
            <Link
              className={`${cssButton.Button} rotate-scale-down-hor`}
              to="/"
            >
              iniciar sesión
            </Link>
          ) : (
            <Button type="submit">enviar</Button>
          )}
        </Form>
      ) : (
        <Div cssx={`${cssBoxes.ConfirmAccount} shadow-medium fadeIn`}>
          <Heading cssx="bg-main">nueva contraseña</Heading>
          <Feedback />

          <Text cssx={`${cssText.TextConfirmAccount}`}>
            el token ha caducado o no existe, intentalo de nuevo
          </Text>

          <Link className={cssButton.Button} to="/">
            volver al inicio
          </Link>
        </Div>
      )}
    </>
  )
}
