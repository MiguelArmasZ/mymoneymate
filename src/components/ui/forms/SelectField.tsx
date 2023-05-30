import { type Options } from '../../../types'

interface Props {
  id: string
  value: string
  cssx: string
  options: Options[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectField = ({
  onChange,
  value,
  id,
  options = [],
  cssx
}: Props) => {
  return (
    <select
      onChange={onChange}
      className={cssx}
      name={id}
      id={id}
      value={value}
    >
      <option defaultChecked disabled value="">
        -- selecciona --
      </option>
      {options.map(({ text, value }) => {
        return (
          <option key={value} value={value}>
            {text}
          </option>
        )
      })}
    </select>
  )
}
