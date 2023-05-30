import { type ChangeEvent, useState, type FormEvent } from 'react'

type handleChangeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>

export function useField<T>(initialState: T) {
  const [fields, setFields] = useState(initialState)

  function handleChange(event: handleChangeEvent) {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    callback: () => Promise<boolean>
  ) {
    event.preventDefault()
    await callback()
      .then((res) => {
        if (res) {
          setFields(initialState)
        }
      })
      .catch((error: any) => {
        console.error(`El error en el submit es: ${error}`)
      })
  }

  return {
    fields,
    handleChange,
    handleSubmit
  }
}
