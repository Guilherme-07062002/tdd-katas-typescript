import { describe, expect, it } from 'vitest'
import { primeNumbers } from './prime-numbers'

describe('testing "prime-numbers"', () => {
  it('given a number shound return a list decomposing it into prime numbers that when multiplied give the original number', () => {
    const result1 = primeNumbers(10)
    const expected1 = [2, 5]
    expect(result1).toEqual(expected1)

    const result2 = primeNumbers(20)
    const expected2 = [2, 2, 5]
    expect(result2).toEqual(expected2)

    const result3 = primeNumbers(30)
    const expected3 = [2, 3, 5]
    expect(result3).toEqual(expected3)

    const result4 = primeNumbers(100)
    const expected4 = [2, 2, 5, 5]
    expect(result4).toEqual(expected4)
  })
})
