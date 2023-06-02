import { Div } from '../global/Boxes'
import { Button } from '../global/Button'
import { Text } from '../global/Text'
import {
  useField,
  useForwardStep,
  useOptionsCategories,
  useRecordsContext
} from '../../../hooks'
import { Form } from '../forms/Form'
import { SelectField } from '../forms/SelectField'
import cssBoxes from '../../../styles/components/Boxes.module.css'
import cssForm from '../../../styles/components/Form.module.css'

export const RecordCategory = () => {
  const { backward, recordData } = useRecordsContext()
  const { fields, handleChange } = useField({
    category: recordData.category
  })

  const { options } = useOptionsCategories()

  const { category } = fields

  const { handleForward } = useForwardStep({ ...recordData, category })

  return (
    <Form
      onSubmit={handleForward}
      cssx={`${cssBoxes.Variant1} fadeIn no-shadow`}
    >
      <Div cssx={`${cssBoxes.Variant2} fadeIn-up`}>
        <Text>¿a cuál categoría pertenece?</Text>
        <SelectField
          id="category"
          onChange={handleChange}
          value={fields.category}
          options={options}
          cssx={`${cssForm.SafariInput} shadow-medium`}
        />
      </Div>
      <Div cssx={cssBoxes.Variant3}>
        <Button onClick={backward} cssx="bg-gray" type="button">
          volver
        </Button>
        <Button initDisabled={fields.category === ''} type="submit">
          siguiente
        </Button>
      </Div>
    </Form>
  )
}
