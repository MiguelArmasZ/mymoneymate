import { authConfig, axiosClient } from '../../config'
import { useRecordsContext } from '../context/useRecordsContext'

export const useNewRecord = () => {
  const { recordData, setLoading } = useRecordsContext()

  async function handleNewRecord(concept: string) {
    try {
      const dataToSend = { ...recordData, concept }
      await axiosClient.post('/record', dataToSend, authConfig())
    } catch (error) {
      console.error(`El error creando un registro es: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return {
    handleNewRecord
  }
}
