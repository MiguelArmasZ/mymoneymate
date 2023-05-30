export function getCurrentDate() {
  const currentMoment = new Date()
  const year = currentMoment.getFullYear()
  const month = currentMoment.getMonth() + 1
  const day = currentMoment.getDate()
  const editFormat = (time: number) => (time <= 9 ? '0' : '')
  const currentDate = `${year}-${editFormat(month)}${month}-${editFormat(
    day
  )}${day}`

  return currentDate
}
