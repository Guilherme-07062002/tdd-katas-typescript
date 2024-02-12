import { describe, expect, it } from 'vitest'
import { ChangeCalculator } from './change-calculator'

describe("testing 'change calculator'", () => {
  it('should return the correct change', () => {
    const changeCalculator = new ChangeCalculator()

    const actual = changeCalculator.calculate(15)

    expect(actual).toEqual([10, 5])
  })

  it('should return the correct change when the amount is 0', () => {
    const changeCalculator = new ChangeCalculator()

    const actual = changeCalculator.calculate(0)

    expect(actual).toEqual([0, 0])
  })

  it('should return the correct change when the amount is 1', () => {
    const changeCalculator = new ChangeCalculator()

    const actual = changeCalculator.calculate(1)

    expect(actual).toEqual([1])
  })

  it('should return the correct change when the amount is 2', () => {
    const changeCalculator = new ChangeCalculator()

    const actual = changeCalculator.calculate(2)

    expect(actual).toEqual([2])
  })

  it('should return the correct change when the amount is 3', () => {
    const changeCalculator = new ChangeCalculator()

    const actual = changeCalculator.calculate(3)

    expect(actual).toEqual([2, 1])
  })
})
