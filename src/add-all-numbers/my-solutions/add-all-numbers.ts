export function addAllNumbers(values: number[]): number {
  if (values.length === 0) throw new Error('Array is empty')

  return values.reduce((acc, cur) => acc + cur)
}
