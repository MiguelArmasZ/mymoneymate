import { formatToCurrency } from '../../../helpers'
import { type MonthlySummary } from '../../../types'
import css from '../../../styles/components/History.module.css'

export const HistoryItem = (record: MonthlySummary) => {
  const { income, spent, monthAndYear } = record

  const splitedMonth = monthAndYear.split(' de ')
  const [monthName, year] = splitedMonth
  const result = income - spent

  return (
    <li className={`${css.Record} shadow-medium`} key={monthAndYear}>
      <p className={`${css.Month} bg-black`}>
        <span>{monthName}</span>
        <span>{year}</span>
      </p>
      <div className={css.Balance}>
        <p className={css.Income}>{formatToCurrency(income)}</p>
        <p className={css.Spent}>{formatToCurrency(spent)}</p>
        <p
          className={`${css.Result} ${
            result > 0 ? 'color-green' : 'color-red'
          }`}
        >
          {formatToCurrency(result)}
        </p>
      </div>
    </li>
  )
}
