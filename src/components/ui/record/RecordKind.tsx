import { SelectField } from '../forms/SelectField'
import { Div } from '../global/Boxes'
import { Button } from '../global/Button'
import { Text } from '../global/Text'
import { useField, useForwardStep, useRecordsContext } from '../../../hooks'
import { Form } from '../forms/Form'
import { optionsToRecordKind } from '../../../data'
import cssForm from '../../../styles/components/Form.module.css'
import cssBoxes from '../../../styles/components/Boxes.module.css'

export const RecordKind = () => {
  const { recordData } = useRecordsContext()
  const { fields, handleChange } = useField({
    kind: recordData.kind
  })
  const { kind } = fields
  const { handleForward } = useForwardStep({
    ...recordData,
    kind
  })

  return (
    <Form
      onSubmit={handleForward}
      cssx={`${cssBoxes.Variant1} fadeIn no-shadow`}
    >
      <Div cssx={`${cssBoxes.Variant2} fadeIn-up`}>
        <Text>¿qué tipo de movimiento es?</Text>
        <SelectField
          id="kind"
          onChange={handleChange}
          value={fields.kind}
          options={optionsToRecordKind}
          cssx={`${cssForm.InputStep} ${cssForm.InputSafari} shadow-medium`}
        />
      </Div>
      <Button initDisabled={fields.kind === ''} type="submit">
        siguiente
      </Button>
    </Form>
  )
}
