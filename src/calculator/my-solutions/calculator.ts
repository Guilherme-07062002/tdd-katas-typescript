export function calculator(expression: string): number {
  const valuesAndOperators = expression.split(/\s+|\b/)
  let firstValue = parseInt(valuesAndOperators[0])

  for (let i = 1; i < valuesAndOperators.length; i += 2) {
    const operator = valuesAndOperators[i]
    const number = parseInt(valuesAndOperators[i + 1])

    if (operator === '+') {
      firstValue += number
    } else {
      firstValue -= number
    }
  }
  const result = firstValue

  return result
}
