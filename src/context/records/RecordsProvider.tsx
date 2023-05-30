import { type ReactNode, useState, type FormEvent } from 'react'
import { RecordsContext } from './RecordsContext'
import { type Record, type CurrentStepRecord } from '../../types'

interface Props {
  children: ReactNode
}

export const INITIAL_STATE_RECORD: Record = {
  _id: '',
  kind: '',
  date: '',
  category: '',
  amount: '',
  concept: ''
}

export const RecordsProvider = ({ children }: Props) => {
  const [currentStep, setCurrentStep] = useState<CurrentStepRecord>(0)
  const [recordData, setRecordData] = useState<Record>(INITIAL_STATE_RECORD)
  const [loading, setLoading] = useState<boolean>(true)
  const [records, setRecords] = useState<Record[]>([])

  function forward(event: FormEvent<HTMLFormElement>, updateRecord: Record) {
    event.preventDefault()
    setRecordData(updateRecord)
    setCurrentStep((prev) => (prev + 1) as CurrentStepRecord)
  }

  function backward() {
    setCurrentStep((prev) => (prev - 1) as CurrentStepRecord)
  }

  return (
    <RecordsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        recordData,
        setRecordData,
        forward,
        backward,
        loading,
        setLoading,
        records,
        setRecords
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}
