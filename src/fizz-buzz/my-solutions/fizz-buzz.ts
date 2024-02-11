export function fizzBuzz(number: number): (string | number)[] {
  if (number < 0) throw new Error('Number is negative')

  if (number === 0) return []

  let result: (string | number)[] = []

  for (let i = 1; i <= number; i++) {
    const isDivisibleBy3 = i % 3 === 0
    const isDivisibleBy5 = i % 5 === 0

    if (isDivisibleBy3 && isDivisibleBy5) {
      result.push('fizzbuzz')
      continue
    }

    if (isDivisibleBy3) {
      result.push('fizz')
      continue
    }

    if (isDivisibleBy5) {
      result.push('buzz')
      continue
    }

    result.push(i)
  }

  return result
}
