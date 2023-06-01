import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useMainContext } from '../context/useMainContext'
import { INITIAL_STATE_FEEDBACK, INITIAL_STATE_RECORD } from '../../context'
import { useRecordsContext } from '../context/useRecordsContext'

export const useListenUrl = () => {
  const { pathname } = useLocation()
  const { setFeedback } = useMainContext()
  const { setRecordData, setCurrentStep, setLoading } = useRecordsContext()

  useEffect(() => {
    setFeedback(INITIAL_STATE_FEEDBACK)
    setRecordData(INITIAL_STATE_RECORD)
    setCurrentStep(0)
    setLoading(true)
    console.log(`${import.meta.env.VITE_BACKEND_URL}/api`)
    window.scrollTo(0, 0)
  }, [pathname])
}
