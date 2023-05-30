import { type FormEvent } from 'react'
import { useRecordsContext } from '../context/useRecordsContext'
import { type Record } from '../../types'

export const useForwardStep = (updateRecordData: Record) => {
  const { forward } = useRecordsContext()

  function handleForward(event: FormEvent<HTMLFormElement>) {
    forward(event, updateRecordData)
  }

  return {
    handleForward
  }
}
