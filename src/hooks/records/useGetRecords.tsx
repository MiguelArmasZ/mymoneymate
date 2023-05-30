import { useEffect } from 'react'
import { authConfig, axiosClient } from '../../config'
import { useRecordsContext } from '../context/useRecordsContext'
import { type Record } from '../../types'

export const useGetRecords = () => {
  const { records, setRecords } = useRecordsContext()
  useEffect(() => {
    async function handleGetRecords() {
      try {
        const response = await axiosClient.get('/record', authConfig())
        const recordsFromAPI = response.data as Record[]
        const recordsSorted = recordsFromAPI.sort((a, b) =>
          b.date.localeCompare(a.date)
        )
        setRecords(recordsSorted)
      } catch (error) {
        console.error(`El error obteniendo los registros es: ${error}`)
      }
    }
    void handleGetRecords()
  }, [])

  return {
    records
  }
}
