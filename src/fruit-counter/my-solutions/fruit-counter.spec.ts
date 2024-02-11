import { describe, expect, it } from 'vitest'
import { fruitCounter } from './fruit-counter'

describe('testing "fruit counter"', () => {
  it('given an array of repeated fruits it should return an object whose keys are the unique elements, and the value is the count of each repeated element', () => {
    const given = ['apple', 'banana', 'apple', 'banana', 'apple', 'apple']

    const actual = fruitCounter(given)

    const expected = {
      apple: 4,
      banana: 2
    }

    expect(actual).toEqual(expected)
  })

  it('given an empty array it should throw an error', () => {
    const given: string[] = []

    expect(() => fruitCounter(given)).toThrowError('Empty basket')
  })

  it('given an array with only one element it should return an object with that element and the value 1', () => {
    const given = ['apple']

    const actual = fruitCounter(given)

    const expected = {
      apple: 1
    }

    expect(actual).toEqual(expected)
  })

  it('given an array with two different elements it should return an object with the elements and their count', () => {
    const given = ['apple', 'banana']

    const actual = fruitCounter(given)

    const expected = {
      apple: 1,
      banana: 1
    }

    expect(actual).toEqual(expected)
  })

  it('given an array with two different elements and one repeated it should return an object with the elements and their count', () => {
    const given = ['apple', 'banana', 'apple']

    const actual = fruitCounter(given)

    const expected = {
      apple: 2,
      banana: 1
    }

    expect(actual).toEqual(expected)
  })

  it('given an array with three different elements and two repeated it should return an object with the elements and their count', () => {
    const given = ['apple', 'banana', 'apple', 'banana', 'apple']

    const actual = fruitCounter(given)

    const expected = {
      apple: 3,
      banana: 2
    }

    expect(actual).toEqual(expected)
  })
})
