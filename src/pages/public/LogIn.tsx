import { type FormEvent } from 'react'
import {
  Button,
  Feedback,
  Form,
  FormHeading,
  FormNav,
  NormalField
} from '../../components/ui'
import { linksForLogIn } from '../../data'
import { useField, useLogIn } from '../../hooks'
import css from '../../styles/components/Form.module.css'

export const LogIn = () => {
  const { fields, handleChange, handleSubmit } = useField({
    email: '',
    password: ''
  })

  const { handleLogIn } = useLogIn()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    void handleSubmit(event, async () => {
      return await handleLogIn(fields, fields.email, fields.password)
    })
  }

  return (
    <>
      <Form cssx={`${css.Form} ${css.FormAuth}`} onSubmit={onSubmit}>
        <FormHeading>inicia sesión</FormHeading>
        <NormalField
          focus
          onChange={handleChange}
          inputType="email"
          id="email"
          name="email"
          label="e-mail"
          placeholder="Introduce tu e-mail"
          value={fields.email}
        />
        <NormalField
          onChange={handleChange}
          inputType="password"
          id="password"
          name="password"
          label="contraseña"
          placeholder="Introduce tu contraseña"
          value={fields.password}
        />
        <Feedback />
        <Button type="submit">entrar</Button>
      </Form>
      <FormNav links={linksForLogIn} />
    </>
  )
}
