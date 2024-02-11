import { describe, expect, it } from 'vitest'
import { range } from './range'

describe('testing "range" function', () => {
  it('given two numbers, should return another array with all numbers between them', () => {
    const result = range(1, 5)
    const expected = [1, 2, 3, 4, 5]
    expect(result).toEqual(expected)
  })

  it('if only one number is given, should return an array with all numbers from 0 to the given number', () => {
    const result = range(5)
    const expected = [0, 1, 2, 3, 4, 5]
    expect(result).toEqual(expected)
  })

  it('should handle if the first number is greater than the second', () => {
    const result = range(5, 1)
    const expected = [5, 4, 3, 2, 1]
    expect(result).toEqual(expected)
  })
})
