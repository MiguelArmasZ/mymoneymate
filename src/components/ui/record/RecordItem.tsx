import { type Record } from '../../../types'
import css from '../../../styles/components/Record.module.css'
import { formatToCurrency, formatToDate } from '../../../helpers'
import Remove from '../../../assets/svg/trash.svg'
import { useDeleteRecord } from '../../../hooks'

export const RecordItem = (record: Record) => {
  const { amount, concept, category, date, kind, _id } = record
  const { onDeleteRecord } = useDeleteRecord()

  return (
    <li className={`${css.Record} shadow-medium`}>
      <h3
        className={`${css.Concept} ${
          kind === 'income' ? 'bg-green' : 'bg-red'
        } `}
      >
        {concept}
      </h3>
      <p className={css.Category}>{category}</p>
      <p className={css.Date}>{formatToDate(date)}</p>
      <p
        className={`${css.Amount} ${
          kind === 'income' ? 'color-green' : 'color-red'
        }`}
      >
        {formatToCurrency(amount)}
      </p>
      <div className={css.Keypad}>
        <button id={_id} onClick={onDeleteRecord} className={css.Button}>
          <img src={Remove} alt="icono de eliminar" />
        </button>
      </div>
    </li>
  )
}
