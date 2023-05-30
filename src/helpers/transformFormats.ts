export function formatToCurrency(amount: string | number) {
  return Number(amount).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  })
}

export function formatToDate(
  date: string | number | Date,
  config: 'full' | 'monthPlusYear' | 'month' = 'full'
) {
  let params = {}

  if (config === 'full') {
    params = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }
  }

  if (config === 'monthPlusYear') {
    params = {
      month: 'long',
      year: 'numeric'
    }
  }

  if (config === 'month') {
    params = {
      month: 'long'
    }
  }

  return new Date(date).toLocaleString('es-ES', params)
}
