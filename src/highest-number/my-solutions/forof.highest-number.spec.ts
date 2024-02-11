import { describe, expect, it } from 'vitest'
import { getHighestNumber } from './forof.highest-number'

describe('testing "highest number" script', () => {
  it('given an array of numbers, it should return the highest number', () => {
    const given = [1, 2, 3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(3)
  })

  it('given an array with only one number it should return that number', () => {
    const given = [1]

    const actual = getHighestNumber(given)

    expect(actual).toBe(1)
  })

  it('given an empty array should return an error message', () => {
    const given: [] = []

    expect(() => getHighestNumber(given)).toThrowError('Array is empty')
  })

  it('given an array of negative numbers should return the highest negative number', () => {
    const given = [-1, -2, -3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
