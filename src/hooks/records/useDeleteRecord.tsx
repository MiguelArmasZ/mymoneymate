import { type MouseEvent } from 'react'
import { useMainContext } from '../context/useMainContext'
import { useRecordsContext } from '../context/useRecordsContext'
import { authConfig, axiosClient } from '../../config'

export const useDeleteRecord = () => {
  const {
    closeConfirmation,
    setFeedbackActive,
    setConfirmationConfig,
    setConfirmation
  } = useMainContext()

  const { records, setRecords } = useRecordsContext()

  async function handleDeleteRecord(id: string) {
    try {
      await axiosClient.delete(`/record/${id}`, authConfig())
      const filteredRecords = records.filter(({ _id }) => _id !== id)

      setRecords(filteredRecords)
      closeConfirmation()
      return true
    } catch (error: any) {
      console.error(`El error eliminando el registro es: ${error}`)
      setFeedbackActive(error.response.data.msg)
      return false
    }
  }

  function onDeleteRecord(event: MouseEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget
    setConfirmationConfig({
      text: '¿estás seguro de que quieres eliminar este registro?',
      id,
      submitAction: async () => {
        return await handleDeleteRecord(id)
      }
    })
    setConfirmation(true)
  }

  return {
    onDeleteRecord
  }
}
