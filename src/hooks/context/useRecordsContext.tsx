import { useContext } from 'react'
import { RecordsContext } from '../../context'

export const useRecordsContext = () => {
  return useContext(RecordsContext)
}
