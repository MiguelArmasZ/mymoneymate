import { useEffect } from 'react'
import {
  Heading,
  RecordCategory,
  RecordKind,
  RecordDate,
  RecordAmount,
  RecordConcept,
  Spinner,
  Div,
  Feedback
} from '../../components/ui'
import { useMainContext, useRecordsContext } from '../../hooks'
import css from '../../styles/components/Boxes.module.css'
import { useNavigate } from 'react-router-dom'

export const Recording = () => {
  const { setFeedbackActive } = useMainContext()
  const { currentStep, loading } = useRecordsContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      setFeedbackActive('registro creado correctamente', false)
      setTimeout(() => {
        navigate('/balance')
      }, 2500)
    }
  }, [loading])

  return (
    <>
      <Heading cssx="bg-main">nuevo registro</Heading>
      {currentStep === 0 && <RecordKind />}
      {currentStep === 1 && <RecordDate />}
      {currentStep === 2 && <RecordCategory />}
      {currentStep === 3 && <RecordAmount />}
      {currentStep === 4 && <RecordConcept />}
      {currentStep === 5 && (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <Div cssx={css.Variant4}>
              <Feedback big redirect />
            </Div>
          )}
        </>
      )}
    </>
  )
}
