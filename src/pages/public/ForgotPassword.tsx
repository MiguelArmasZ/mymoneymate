import { type FormEvent } from 'react'
import {
  Button,
  Feedback,
  Form,
  FormHeading,
  FormNav,
  NormalField
} from '../../components/ui'
import { linksForForgotPassword } from '../../data'
import { useField, useForgotPassword } from '../../hooks'
import css from '../../styles/components/Form.module.css'

export const ForgotPassword = () => {
  const { fields, handleChange, handleSubmit } = useField({
    email: ''
  })
  const { handleForgotPassword } = useForgotPassword()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    void handleSubmit(event, async () => {
      return await handleForgotPassword(fields.email)
    })
  }

  return (
    <>
      <Form cssx={`${css.Form} ${css.FormAuth}`} onSubmit={onSubmit}>
        <FormHeading>recuperar acceso</FormHeading>
        <NormalField
          focus
          onChange={handleChange}
          inputType="email"
          id="email"
          name="email"
          label="e-mail"
          placeholder="El e-mail de tu cuenta"
          value={fields.email}
        />
        <Feedback />
        <Button type="submit">enviar</Button>
      </Form>
      <FormNav links={linksForForgotPassword} />
    </>
  )
}
