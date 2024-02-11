import { describe, expect, it } from 'vitest'
import { filterEvenNumbers } from './filter-even-numbers'

describe('testing "filter even numbers" function', () => {
  it('given an array of numbers it should filter the even numbers.', () => {
    const given = [1, 2, 3, 4, 5, 6]

    const actual = filterEvenNumbers(given)

    const expected = [2, 4, 6]

    expect(actual).toEqual(expected)
  })

  it('given an empty array it should return error message.', () => {
    const given: [] = []

    expect(() => filterEvenNumbers(given)).toThrowError('Array is empty')
  })

  it('should return an empty array if there are no even numbers.', () => {
    const given = [1, 3, 5, 7]

    const actual = filterEvenNumbers(given)

    const expected: [] = []

    expect(actual).toEqual(expected)
  })
})
