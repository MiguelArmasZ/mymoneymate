/* eslint-disable @typescript-eslint/indent */
import { ComposedChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { Div, Heading, IsEmpty } from '../../components/ui'
import cssBoxes from '../../styles/components/Boxes.module.css'
import { useEffect, useState } from 'react'
import { useGetRecords } from '../../hooks/records/useGetRecords'
import { type AmountByCategory } from '../../types'
import { formatToDate } from '../../helpers'

export const CategoryAnalysis = () => {
  const [amountByCategories, setAmountByCategories] = useState<
    AmountByCategory[]
  >([])
  const { records } = useGetRecords()

  useEffect(() => {
    const currentMonth = formatToDate(new Date(), 'month')

    const getKindRecords = records.filter(({ kind, date }) => {
      return kind === 'spent' && formatToDate(date, 'month') === currentMonth
    })

    const allCategories = [
      ...new Set(getKindRecords.map(({ category }) => category))
    ]

    const categoriesSummary = allCategories
      .map((category) => {
        const amountByCategory: AmountByCategory = {
          cantidad: 0,
          name: ''
        }

        getKindRecords.forEach((record) => {
          amountByCategory.name = category
          if (record.category === category) {
            amountByCategory.cantidad += Number(record.amount)
          }
        })

        return amountByCategory
      })
      .map((item) => {
        return {
          cantidad: +item.cantidad.toFixed(2),
          name: item.name
        }
      })
      .sort((a, b) => b.cantidad - a.cantidad)

    setAmountByCategories(categoriesSummary)
  }, [records])

  useEffect(() => {
    const labels = document.querySelectorAll('g.recharts-yAxis text > tspan')
    labels.forEach((label) => {
      const letters = label.textContent?.split('') ?? []
      if (letters?.length > 6) {
        const fivefirtsLetters = letters?.slice(0, 6)
        label.textContent = fivefirtsLetters?.join('') + '...'
      }
    })
  }, [records])

  const dynamicHeight = amountByCategories.length * 90

  return (
    <>
      <Heading cssx="bg-main">análisis</Heading>

      {amountByCategories?.length > 0 ? (
        <Div cssx={`${cssBoxes.Variant5} fadeIn`}>
          <ComposedChart
            layout="vertical"
            width={300}
            height={dynamicHeight}
            data={amountByCategories}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="auto" />
            <Tooltip />
            <Bar dataKey="cantidad" barSize={30} fill="#413ea0" />
          </ComposedChart>
        </Div>
      ) : (
        <IsEmpty>aún no tienes registros en ningún mes</IsEmpty>
      )}
    </>
  )
}
