import { describe, expect, it } from 'vitest'
import { alphabetical } from './alphabetical'

describe('testing "alphabetical" script', () => {
  it('given a list of strings it should return the list alphabetically sorted', () => {
    const given = ['c', 'a', 'b']

    const actual = alphabetical(given)

    expect(actual).toEqual(['a', 'b', 'c'])
  })

  it('given a list with only one string it should return the list with the same string', () => {
    const given = ['c']

    const actual = alphabetical(given)

    expect(actual).toEqual(['c'])
  })

  it('given a empty list of strings it should throw an error', () => {
    const given: [] = []

    expect(() => alphabetical(given)).toThrowError('array is empty')
  })

  it('given a number in the list of strings it should throw an error', () => {
    const given = ['c', 1, 'b'] as any

    expect(() => alphabetical(given)).toThrowError('array contains non-string elements')
  })

  it('given a list of strings with a string that contains a number it should throw an error', () => {
    const given = ['c', 'a1', 'b']

    expect(() => alphabetical(given)).toThrowError('array contains non-string elements')
  })

  it('given a list of strings with a string that contains a special character it should throw an error', () => {
    const given = ['c', 'a!', 'b']

    expect(() => alphabetical(given)).toThrowError('array contains especial characters')
  })
})
