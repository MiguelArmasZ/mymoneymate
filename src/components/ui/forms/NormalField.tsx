import { useEffect, type ChangeEvent } from 'react'
import css from '../../../styles/components/Form.module.css'

interface Props {
  inputType: string
  id: string
  name: string
  value: string
  label?: string
  cssx?: string
  max?: string
  maxLength?: number
  step?: number
  placeholder?: string
  focus?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const NormalField = ({
  inputType,
  id,
  name,
  label,
  value,
  cssx = '',
  max,
  maxLength,
  step,
  placeholder,
  onChange,
  focus = false
}: Props) => {
  useEffect(() => {
    // const $input = document.querySelector('#' + id)
    // $input?.focus()
  }, [])

  return (
    <div className={css.Field}>
      <label className={css.Label} htmlFor={id}>
        {label}
      </label>
      <input
        autoFocus={focus}
        autoComplete="off"
        className={`${css.Input} ${cssx}`}
        onChange={onChange}
        name={name}
        id={id}
        type={inputType}
        value={value}
        placeholder={placeholder}
        max={max}
        maxLength={maxLength}
        step={step}
      />
    </div>
  )
}
