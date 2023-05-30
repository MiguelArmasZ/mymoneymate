import { Div } from '../global/Boxes'
import { Button } from '../global/Button'
import { Text } from '../global/Text'
import { useField, useForwardStep, useRecordsContext } from '../../../hooks'
import { Form } from '../forms/Form'
import { NormalField } from '../forms/NormalField'
import cssBoxes from '../../../styles/components/Boxes.module.css'
import cssForm from '../../../styles/components/Form.module.css'

export const RecordAmount = () => {
  const { backward, recordData } = useRecordsContext()

  const { fields, handleChange } = useField({
    amount: recordData.amount
  })
  const { amount } = fields
  const { handleForward } = useForwardStep({ ...recordData, amount })

  return (
    <Form
      onSubmit={handleForward}
      cssx={`${cssBoxes.Variant1} fadeIn no-shadow`}
    >
      <Div cssx={`${cssBoxes.Variant2} fadeIn-up`}>
        <Text>¿cuánto dinero ha sido?</Text>
        <NormalField
          focus
          cssx={`${cssForm.InputStep} shadow-medium`}
          onChange={handleChange}
          inputType="number"
          id="record-amount"
          name="amount"
          step={0.01}
          placeholder="85,53 €"
          value={fields.amount}
        />
      </Div>
      <Div cssx={cssBoxes.Variant3}>
        <Button onClick={backward} cssx="bg-gray" type="button">
          volver
        </Button>
        <Button initDisabled={fields.amount === ''} type="submit">
          siguiente
        </Button>
      </Div>
    </Form>
  )
}
