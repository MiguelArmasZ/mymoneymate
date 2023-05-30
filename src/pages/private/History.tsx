import { Heading, HistoryItem, IsEmpty } from '../../components/ui'
import { useBuildHistory } from '../../hooks'
import css from '../../styles/components/History.module.css'

export const History = () => {
  const { summaryOfMonth } = useBuildHistory()

  return (
    <>
      <Heading cssx="bg-main">historial</Heading>
      <ul className={`${css.List} fadeIn`}>
        {summaryOfMonth.length > 0 ? (
          summaryOfMonth.map((record) => {
            return <HistoryItem key={record.monthAndYear} {...record} />
          })
        ) : (
          <IsEmpty>aún no tienes registros en ningún mes</IsEmpty>
        )}
      </ul>
    </>
  )
}
