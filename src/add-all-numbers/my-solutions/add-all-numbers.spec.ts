import { describe, it, expect } from 'vitest'
import { addAllNumbers } from './add-all-numbers'

describe('testing "add all numbers" script', () => {
  it('given a list of numbers it should get the total by adding them together', () => {
    const given = [1, 2, 3]

    const actual = addAllNumbers(given)

    expect(actual).toBe(6)
  })

  it('given only one number it should return that number', () => {
    const given = [2]

    const actual = addAllNumbers(given)

    expect(actual).toBe(2)
  })

  it('given an empty array should return an error message', () => {
    const given: [] = []

    expect(() => addAllNumbers(given)).toThrowError('Array is empty')
  })

  it('given a negative number should subtract the number from the total', () => {
    const given = [1, -2, 3]

    const actual = addAllNumbers(given)

    expect(actual).toBe(2)
  })
})
