import { Confirmation, Heading, IsEmpty, RecordItem } from '../../components/ui'
import { useGetRecords, useMainContext } from '../../hooks'
import css from '../../styles/components/Record.module.css'

export const Records = () => {
  const { records } = useGetRecords()
  const { confirmation } = useMainContext()

  return (
    <>
      <Heading cssx="bg-main">registros</Heading>
      <ul className={`${css.List} fadeIn`}>
        {records.length !== 0 ? (
          records.map((record) => <RecordItem key={record._id} {...record} />)
        ) : (
          <IsEmpty>aún no tienes ningún registro</IsEmpty>
        )}
      </ul>
      {confirmation && <Confirmation />}
    </>
  )
}
