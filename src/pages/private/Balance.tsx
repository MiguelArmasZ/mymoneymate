/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Link } from 'react-router-dom'
import { Div, Heading, Text } from '../../components/ui'
import cssButton from '../../styles/components/Button.module.css'
import cssBoxes from '../../styles/components/Boxes.module.css'
import { PieChart, Pie, Cell } from 'recharts'
import { useEffect, useState } from 'react'
import { useBuildHistory, useGetRecords } from '../../hooks'
import { formatToCurrency, formatToDate } from '../../helpers'
import { type MonthlySummary } from '../../types'
import cssBalance from '../../styles/components/Blance.module.css'

const COLORS = ['#367e18', '#dda310', '#cc3636']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      className="label fadeIn"
      x={x}
      y={y}
      stroke="0"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export const Balance = () => {
  const [currentMonth] = useState(formatToDate(new Date(), 'month'))
  const [getSaving, setGetSaving] = useState(0)
  const [summaryOfCurrentMonth, setSummaryOfCurrentMonth] =
    useState<MonthlySummary>({
      income: 0,
      month: '',
      monthAndYear: '',
      spent: 0
    })

  const { records } = useGetRecords()
  const { summaryOfMonth } = useBuildHistory()
  const savingRecords = records.filter((record) => record.category === 'ahorro')

  useEffect(() => {
    let saving = 0
    savingRecords.forEach((record) => {
      saving += Number(record.amount)
    })

    setGetSaving(saving)
  }, [savingRecords])

  useEffect(() => {
    function getSummaryOfCurrentMonth() {
      const [dataCurrentMonth] = summaryOfMonth.filter(({ month }) => {
        return month === currentMonth
      })
      setSummaryOfCurrentMonth((prev) => {
        return { ...prev, ...dataCurrentMonth }
      })
    }

    getSummaryOfCurrentMonth()
  }, [summaryOfMonth])

  const data = [
    {
      value:
        summaryOfCurrentMonth.income - summaryOfCurrentMonth.spent - getSaving
    },
    {
      value: getSaving
    },
    { value: summaryOfCurrentMonth.spent }
  ]

  useEffect(() => {
    const chart = document.querySelector('.pie')
    const observer = new MutationObserver(() => {
      const labels: NodeListOf<HTMLElement> =
        document.querySelectorAll('.label')
      if (labels.length > 0) {
        labels[0].style.color = 'var(--success)'
        labels[1].style.color = 'var(--warning)'
        labels[2].style.color = 'var(--error)'
        observer.disconnect()
      }
    })
    observer.observe(chart ?? document.body, { childList: true, subtree: true })
  }, [data])

  return (
    <>
      <Heading cssx="bg-main">{currentMonth}</Heading>
      <Div cssx={`${cssBoxes.Variant1} fadeIn`}>
        <Div cssx="pie">
          <Text cssx="pie__result">
            {formatToCurrency(
              summaryOfCurrentMonth.income -
                summaryOfCurrentMonth.spent -
                getSaving
            )}
          </Text>
          <PieChart innerRadius={5} width={250} height={250}>
            <Pie
              data={data}
              cx={120}
              cy={120}
              innerRadius={80}
              outerRadius={100}
              label={renderCustomizedLabel}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Div>
        <Div cssx={`${cssBalance.Summary} shadow-medium`}>
          <p className={cssBalance.Item}>
            ingresado
            <span className="color-green">
              {formatToCurrency(summaryOfCurrentMonth.income)}
            </span>
          </p>
          <p className={cssBalance.Item}>
            gastado
            <span className="color-red">
              {formatToCurrency(summaryOfCurrentMonth.spent - getSaving)}
            </span>
          </p>
          <p className={cssBalance.Item}>
            ahorrado
            <span className="color-yellow">{formatToCurrency(getSaving)}</span>
          </p>
          <p className={cssBalance.Item}>
            diferencia
            <span>
              {formatToCurrency(
                summaryOfCurrentMonth.income -
                  summaryOfCurrentMonth.spent -
                  getSaving
              )}
            </span>
          </p>
        </Div>

        <Link className={cssButton.Button} to="records">
          ver los registros
        </Link>
      </Div>
    </>
  )
}
