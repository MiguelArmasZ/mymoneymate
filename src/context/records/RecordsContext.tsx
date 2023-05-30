import { type FormEvent, createContext } from 'react'
import { type Record, type CurrentStepRecord } from '../../types'

type SetCurrentStep = (
  step: CurrentStepRecord | ((prev: CurrentStepRecord) => CurrentStepRecord)
) => void

interface RecordsContextTypes {
  currentStep: CurrentStepRecord
  setCurrentStep: SetCurrentStep
  forward: (event: FormEvent<HTMLFormElement>, updateRecord: Record) => void
  backward: () => void

  recordData: Record
  setRecordData: (record: Record) => void

  loading: boolean
  setLoading: (state: boolean) => void

  records: Record[]
  setRecords: (records: Record[]) => void
}

export const RecordsContext = createContext({} as RecordsContextTypes)
