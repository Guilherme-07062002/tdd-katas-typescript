import { describe, it, expect } from 'vitest'
import { fizzBuzz } from './fizz-buzz'

describe("testing 'fizz buzz' script", () => {
  it("given a number it should return a list where each number is replaced by 'fizz' if it's divisible by 3, 'buzz' if it's divisible by 5", () => {
    const given = 8

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8])
  })

  it("should return 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    const given = 15

    const actual = fizzBuzz(given)

    expect(actual[14]).toEqual('fizzbuzz')
  })

  it('should return an empty array if the given number is 0', () => {
    const given = 0

    const actual = fizzBuzz(given)

    expect(actual).toEqual([])
  })

  it('should throw an error if the given number is negative', () => {
    const given = -5

    expect(() => fizzBuzz(given)).toThrowError('Number is negative')
  })
})
