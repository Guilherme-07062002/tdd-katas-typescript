import { describe, expect, it } from 'vitest'
import { calculator } from './calculator'

describe('testing "calculator"', () => {
  it('should sum two numbers', () => {
    const result = calculator('1 + 1')
    expect(result).toBe(2)
  })

  it('should subtract two numbers', () => {
    const result = calculator('3 - 1')
    expect(result).toBe(2)
  })

  it('should sum multiple numbers', () => {
    const result = calculator('1 + 1 + 1 + 1')
    expect(result).toBe(4)
  })

  it('should subtract multiple numbers', () => {
    const result = calculator('10 - 1 - 1 - 1')
    expect(result).toBe(7)
  })

  it('should sum and subtract multiple numbers', () => {
    const result = calculator('10 - 1 + 1 - 1')
    expect(result).toBe(9)
  })

  it('should handle negative numbers', () => {
    const result = calculator('1 - 10')
    expect(result).toBe(-9)
  })
})
