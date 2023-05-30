import { useCategoriesContext, useField } from '../../../hooks'
import { useEffect, type FormEvent } from 'react'
import { Form } from '../forms/Form'
import { FormHeading } from '../forms/FormHeading'
import { NormalField } from '../forms/NormalField'
import { Feedback } from '../global/Feedback'
import { Button } from '../global/Button'
import { Div } from '../global/Boxes'
import cssForm from '../../../styles/components/Form.module.css'
import cssModal from '../../../styles/components/Category.module.css'
import cssBoxes from '../../../styles/components/Boxes.module.css'

export const CategoryModal = () => {
  const { modalConfig, setModalConfig, closeModal, categories } =
    useCategoriesContext()
  const { fields, handleChange, handleSubmit } = useField({
    name: modalConfig.categoryToUpdate?.name ?? ''
  })

  useEffect(() => {
    setModalConfig({ ...modalConfig, categoryToUpdate: { id: '', name: '' } })
  }, [categories])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    void handleSubmit(event, async () => {
      return await modalConfig.submitAction(fields.name)
    })
  }

  return (
    <Div cssx={`${cssModal.Modal} fadeIn bg-transparent `}>
      <Form
        cssx={`${cssForm.Form} ${cssForm.FormAuth} no-shadow fadeIn-up`}
        onSubmit={onSubmit}
      >
        <FormHeading>{modalConfig.heading}</FormHeading>
        <NormalField
          focus
          onChange={handleChange}
          inputType="text"
          id="new-category"
          name="name"
          label="nombre"
          placeholder="Nombre de la nueva categoría"
          value={fields.name}
        />
        <Feedback />
        <Div cssx={cssBoxes.Keypad}>
          <Button type="submit">{modalConfig.submitName}</Button>
          <Button
            enableDisabled={false}
            onClick={closeModal}
            cssx="bg-gray"
            type="button"
          >
            cancelar
          </Button>
        </Div>
      </Form>
    </Div>
  )
}
