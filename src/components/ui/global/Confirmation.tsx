import { Div } from './Boxes'
import { Text } from './Text'
import css from '../../../styles/components/Confirmation.module.css'
import { Button } from './Button'
import { useMainContext } from '../../../hooks'
import { Form } from '../forms/Form'
import { type FormEvent } from 'react'

export const Confirmation = () => {
  const { confirmationConfig, closeConfirmation } = useMainContext()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void confirmationConfig.submitAction()
  }

  return (
    <Div cssx={`${css.Modal} fadeIn bg-transparent`}>
      <Div cssx={`${css.Wrap} fadeIn-up `}>
        <Text cssx={css.Text}>{confirmationConfig.text}</Text>
        <Form onSubmit={onSubmit} cssx={`${css.Keypad} no-shadow`}>
          <Button cssx="bg-red" type="submit">
            aceptar
          </Button>
          <Button onClick={closeConfirmation} cssx="bg-gray" type="button">
            cancelar
          </Button>
        </Form>
      </Div>
    </Div>
  )
}
