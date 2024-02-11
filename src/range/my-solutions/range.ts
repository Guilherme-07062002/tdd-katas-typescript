export function range(firstNumber: number, secondNumber?: number): number[] {
  if (secondNumber === undefined) {
    secondNumber = firstNumber
    firstNumber = 0
  }

  const result = []
  const increment = firstNumber < secondNumber ? 1 : -1

  for (let i = firstNumber; i !== secondNumber + increment; i += increment) {
    result.push(i)
  }

  return result
}
