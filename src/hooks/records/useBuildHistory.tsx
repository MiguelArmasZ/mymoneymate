import { useGetRecords } from './useGetRecords'
import { type CategoryKinds, type MonthlySummary } from '../../types'
import { useEffect, useState } from 'react'
import { formatToDate } from '../../helpers'

export const useBuildHistory = () => {
  const [summaryOfMonth, setSummaryOfMonth] = useState<MonthlySummary[]>([])

  const { records } = useGetRecords()

  useEffect(() => {
    const monthsWithRecords = records.map(({ date }) => ({
      month: formatToDate(date, 'month'),
      monthAndYear: formatToDate(date, 'monthPlusYear')
    }))

    const clearRepeatMonths = [
      ...new Set(monthsWithRecords.map((month) => JSON.stringify(month)))
    ].map((month) => JSON.parse(month))

    const recordsWithMonthName = records.map((record) => ({
      ...record,
      date: formatToDate(record.date, 'month')
    }))

    const summaries = clearRepeatMonths.map(({ month, monthAndYear }) => {
      const summaryMonthlyRecord: MonthlySummary = {
        spent: 0,
        income: 0,
        month: '',
        monthAndYear: ''
      }

      recordsWithMonthName.forEach((record) => {
        const getTotal = (kind: CategoryKinds, group: 'spent' | 'income') => {
          if (record.kind === kind && record.date === month) {
            summaryMonthlyRecord[group] ??= 0
            summaryMonthlyRecord[group] += Number(record.amount)
          }
          summaryMonthlyRecord.month = month
          summaryMonthlyRecord.monthAndYear = monthAndYear
        }

        getTotal('spent', 'spent')
        getTotal('income', 'income')
      })

      return { ...summaryMonthlyRecord }
    })

    setSummaryOfMonth(summaries)
  }, [records])

  return {
    summaryOfMonth
  }
}
