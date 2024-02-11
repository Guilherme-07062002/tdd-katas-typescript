import { describe, expect, it } from 'vitest'
import { grouper } from './grouper'

describe("testing 'grouper'", () => {
  it('given an array of people (a person has age and name) get an object where the keys are the age of the people and the value is an array of all the people with that age.', () => {
    const persons = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 25 },
      { name: 'Tom', age: 30 },
      { name: 'Jerry', age: 30 },
      { name: 'Mary', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Alice', age: 25 }
    ]

    const actual = grouper(persons)

    const expected = {
      25: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 25 },
        { name: 'Mary', age: 25 },
        { name: 'Alice', age: 25 }
      ],
      30: [
        { name: 'Tom', age: 30 },
        { name: 'Jerry', age: 30 },
        { name: 'Bob', age: 30 }
      ]
    }

    expect(actual).toEqual(expected)
  })

  it('given an empty array it should throw an error', () => {
    const persons: [] = []

    expect(() => grouper(persons)).toThrowError('empty array')
  })
})
