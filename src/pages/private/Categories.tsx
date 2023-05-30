import { Card, Heading } from '../../components/ui'
import IncomeIcon from '../../assets/icons/income.png'
import SpentIcon from '../../assets/icons/spent.png'
import AnalyticsIcon from '../../assets/icons/analytics.png'
import { useCategoriesContext } from '../../hooks'
import { useEffect } from 'react'

export const Categories = () => {
  const { setLoading } = useCategoriesContext()

  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <>
      <Heading cssx="bg-main">Categorías</Heading>
      <Card
        text="ingresos"
        bg="bg-green"
        icon={IncomeIcon}
        to="/balance/categories/income"
        alt="icono de ingresos"
      />
      <Card
        text="gastos"
        bg="bg-red"
        icon={SpentIcon}
        to="/balance/categories/spent"
        alt="icono de gastos"
      />
      <Card
        text="análisis"
        bg="bg-yellow"
        icon={AnalyticsIcon}
        to="/balance/categories/analysis"
        alt="icono de análisis"
      />
    </>
  )
}
