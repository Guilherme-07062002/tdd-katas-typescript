import { describe, it, expect } from 'vitest'
import { getPoweredByTwo } from './forof.power-of-two'

describe('testing "power of two"', () => {
  it('given a list of numbers it should return a new list of numbers that are to the power of 2', () => {
    const given = [2, 3, 4]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([4, 9, 16])
  })

  it('given only one number it should return the number to the power of 2', () => {
    const given = [2]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([4])
  })

  it('given an empty array should throw an error', () => {
    const given: [] = []

    expect(() => getPoweredByTwo(given)).toThrowError('Array is empty')
  })

  it('given a negative number should throw an error', () => {
    const given = [-2, 3, 4]

    expect(() => getPoweredByTwo(given)).toThrowError('Negative numbers are not allowed')
  })

  it('given a zero should return 0', () => {
    const given = [0]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([0])
  })
})
