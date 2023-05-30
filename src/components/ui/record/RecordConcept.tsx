import { Div } from '../global/Boxes'
import { Button } from '../global/Button'
import { Text } from '../global/Text'
import { useField, useNewRecord, useRecordsContext } from '../../../hooks'
import { Form } from '../forms/Form'
import { NormalField } from '../forms/NormalField'
import { type FormEvent } from 'react'
import cssBoxes from '../../../styles/components/Boxes.module.css'
import cssForm from '../../../styles/components/Form.module.css'

export const RecordConcept = () => {
  const { forward, backward, recordData } = useRecordsContext()
  const { handleNewRecord } = useNewRecord()

  const { fields, handleChange } = useField({
    concept: recordData.concept
  })
  const { concept } = fields

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    forward(event, { ...recordData, concept })
    void handleNewRecord(concept)
  }
  return (
    <Form onSubmit={onSubmit} cssx={`${cssBoxes.Variant1} fadeIn no-shadow`}>
      <Div cssx={`${cssBoxes.Variant2} fadeIn-up`}>
        <Text>anota una breve descripción</Text>
        <NormalField
          focus
          cssx={`${cssForm.InputStep} shadow-medium`}
          onChange={handleChange}
          inputType="text"
          id="concept"
          name="concept"
          maxLength={30}
          placeholder="Comida en un restaurante"
          value={fields.concept}
        />
      </Div>
      <Div cssx={cssBoxes.Variant3}>
        <Button onClick={backward} cssx="bg-gray" type="button">
          volver
        </Button>
        <Button initDisabled={fields.concept === ''} type="submit">
          registrar
        </Button>
      </Div>
    </Form>
  )
}
