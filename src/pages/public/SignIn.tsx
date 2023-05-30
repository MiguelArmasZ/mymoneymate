import { type FormEvent } from 'react'
import {
  Button,
  Feedback,
  Form,
  FormHeading,
  FormNav,
  NormalField
} from '../../components/ui'
import { linksForSignIn } from '../../data'
import { useField, useSignIn } from '../../hooks'
import css from '../../styles/components/Form.module.css'

export const SignIn = () => {
  const { fields, handleChange, handleSubmit } = useField({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { handleSignIn } = useSignIn()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    void handleSubmit(event, async () => {
      return await handleSignIn(
        fields,
        fields.userName,
        fields.email,
        fields.password,
        fields.passwordConfirm
      )
    })
  }

  return (
    <>
      <Form cssx={`${css.Form} ${css.FormAuth}`} onSubmit={onSubmit}>
        <FormHeading>crea una cuenta</FormHeading>
        <NormalField
          focus
          onChange={handleChange}
          inputType="text"
          id="user-name"
          name="userName"
          label="nombre de usuario"
          placeholder="Tu nombre"
          value={fields.userName}
        />
        <NormalField
          onChange={handleChange}
          inputType="email"
          id="email"
          name="email"
          label="e-mail"
          placeholder="Tu e-mail"
          value={fields.email}
        />
        <NormalField
          onChange={handleChange}
          inputType="password"
          id="password"
          name="password"
          label="contraseña"
          placeholder="Crea una contraseña"
          value={fields.password}
        />
        <NormalField
          onChange={handleChange}
          inputType="password"
          id="password-confirm"
          name="passwordConfirm"
          label="repite la contraseña"
          placeholder="Confirma tu contraseña"
          value={fields.passwordConfirm}
        />
        <Feedback />
        <Button type="submit">crear</Button>
      </Form>
      <FormNav links={linksForSignIn} />
    </>
  )
}
