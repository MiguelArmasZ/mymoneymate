import { Div } from '../global/Boxes'
import { Button } from '../global/Button'
import { Text } from '../global/Text'
import {
  useField,
  useForwardStep,
  useGetCategories,
  useRecordsContext
} from '../../../hooks'
import { Form } from '../forms/Form'
import { NormalField } from '../forms/NormalField'
import { getCurrentDate } from '../../../helpers'
import cssBoxes from '../../../styles/components/Boxes.module.css'
import cssForm from '../../../styles/components/Form.module.css'

export const RecordDate = () => {
  const { backward, recordData } = useRecordsContext()
  const { fields, handleChange } = useField({
    date: recordData.date === '' ? getCurrentDate() : recordData.date
  })
  const { date } = fields
  useGetCategories(recordData.kind)

  const { handleForward } = useForwardStep({ ...recordData, date })

  return (
    <Form
      onSubmit={handleForward}
      cssx={`${cssBoxes.Variant1} fadeIn no-shadow`}
    >
      <Div cssx={`${cssBoxes.Variant2} fadeIn-up`}>
        <Text>¿cuándo ha sido?</Text>
        <NormalField
          cssx={`${cssForm.SelectWrap} shadow-medium`}
          onChange={handleChange}
          inputType="date"
          id="record-date"
          name="date"
          value={fields.date}
          max={getCurrentDate()}
        />
      </Div>
      <Div cssx={cssBoxes.Variant3}>
        <Button onClick={backward} cssx="bg-gray" type="button">
          volver
        </Button>
        <Button initDisabled={fields.date === ''} type="submit">
          siguiente
        </Button>
      </Div>
    </Form>
  )
}
