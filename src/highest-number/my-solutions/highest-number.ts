export function getHighestNumber(values: number[]) {
  if (values.length === 0) throw new Error('Array is empty')

  let highest = values[0]

  for (const value of values) {
    if (value > highest) {
      highest = value
    }
  }

  return highest
}
