export function getPoweredByTwo(values: number[]): number[] {
  if (values.length === 0) throw new Error('Array is empty')

  let poweredByTwo: number[] = []

  for (const value of values) {
    if (value < 0) throw new Error('Negative numbers are not allowed')

    if (value === 0) return [0]

    poweredByTwo.push(value ** 2)
  }

  return poweredByTwo
}
