export function filterEvenNumbers(values: number[]): number[] {
  if (values.length === 0) throw new Error('Array is empty')

  const evenNumbers = values.filter(value => value % 2 === 0)

  return evenNumbers
}
